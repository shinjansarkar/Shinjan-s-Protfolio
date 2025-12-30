import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'shinjansarkar';

export async function GET() {
    try {
        const headers: HeadersInit = {
            'Accept': 'application/vnd.github.v3+json',
        };

        // Add token if available (optional but recommended for higher rate limits)
        if (process.env.GITHUB_TOKEN) {
            headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
        }

        // Fetch user's repositories
        const reposResponse = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&type=owner`,
            { headers, next: { revalidate: 3600 } } // Cache for 1 hour
        );

        if (!reposResponse.ok) {
            throw new Error('Failed to fetch repositories');
        }

        const repos = await reposResponse.json();

        // Calculate total stars
        const totalStars = repos.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);

        // Fetch user's public events to count commits and PRs
        const eventsResponse = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100`,
            { headers, next: { revalidate: 3600 } }
        );

        let totalCommits = 0;
        let totalPRs = 0;

        if (eventsResponse.ok) {
            const events = await eventsResponse.json();
            
            // Count commits from push events (this is a rough estimate from recent activity)
            const pushEvents = events.filter((e: any) => e.type === 'PushEvent');
            totalCommits = pushEvents.reduce((acc: number, event: any) => {
                return acc + (event.payload.commits?.length || 0);
            }, 0);

            // Count PRs
            totalPRs = events.filter((e: any) => e.type === 'PullRequestEvent').length;
        }

        // For more accurate commit count, we need to fetch contribution data
        // GitHub doesn't provide total commits via API easily, so we'll use the repos data
        const contributionsResponse = await fetch(
            `https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}`,
            { headers, next: { revalidate: 3600 } }
        );

        let searchCommits = 0;
        if (contributionsResponse.ok) {
            const contributionsData = await contributionsResponse.json();
            searchCommits = contributionsData.total_count || 0;
        }

        return NextResponse.json({
            commits: Math.max(totalCommits, searchCommits),
            pullRequests: totalPRs,
            stars: totalStars,
            repos: repos.length,
        });

    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Return fallback data on error
        return NextResponse.json({
            commits: 0,
            pullRequests: 0,
            stars: 0,
            repos: 0,
            error: 'Failed to fetch GitHub stats'
        }, { status: 500 });
    }
}
