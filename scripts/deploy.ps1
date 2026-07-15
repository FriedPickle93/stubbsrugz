# Run after completing GitHub and Vercel browser auth.
# GitHub: https://github.com/login/device
# Vercel: https://vercel.com/oauth/device

$ErrorActionPreference = "Stop"
$env:Path = [System.Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [System.Environment]::GetEnvironmentVariable('Path','User')
Set-Location $PSScriptRoot\..

Write-Host "Checking GitHub auth..."
gh auth status
if ($LASTEXITCODE -ne 0) {
    Write-Host "Run: gh auth login --hostname github.com --git-protocol https --web"
    exit 1
}

Write-Host "Creating GitHub repo and pushing..."
gh repo create stubbsrugz --public --source=. --remote=origin --push

Write-Host "Deploying to Vercel..."
npx vercel --prod --yes

Write-Host "Done! Add these env vars in the Vercel dashboard:"
Write-Host "  CONTACT_EMAIL=your-email@example.com"
Write-Host "  RESEND_API_KEY=re_your_resend_api_key"
