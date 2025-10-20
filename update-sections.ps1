# Update ProjectsSection.tsx
$file = "Portfolio/src/components/sections/ProjectsSection.tsx"
$content = Get-Content $file -Raw
$content = $content -replace 'from-slate-800 to-slate-600 dark:from-white dark:to-gray-300', 'from-white to-gray-300'
$content = $content -replace 'text-slate-800 dark:text-gray-300', 'text-gray-300'
$content = $content -replace 'text-slate-800 dark:text-white', 'text-white'
$content = $content -replace 'text-slate-600 dark:text-gray-300', 'text-gray-300'
Set-Content $file $content

# Update ExperienceSection.tsx
$file = "Portfolio/src/components/sections/ExperienceSection.tsx"
$content = Get-Content $file -Raw
$content = $content -replace 'from-slate-800 to-slate-600 dark:from-white dark:to-gray-300', 'from-white to-gray-300'
$content = $content -replace 'text-slate-800 dark:text-gray-300', 'text-gray-300'
$content = $content -replace 'text-slate-800 dark:text-white', 'text-white'
$content = $content -replace 'text-slate-600 dark:text-gray-300', 'text-gray-300'
$content = $content -replace 'group-hover:text-slate-800 dark:group-hover:text-white', 'group-hover:text-white'
Set-Content $file $content

# Update LeadershipSection.tsx
$file = "Portfolio/src/components/sections/LeadershipSection.tsx"
$content = Get-Content $file -Raw
$content = $content -replace 'from-slate-800 to-slate-600 dark:from-white dark:to-gray-300', 'from-white to-gray-300'
$content = $content -replace 'text-gray-700 dark:text-gray-300', 'text-gray-300'
$content = $content -replace 'text-slate-800 dark:text-white', 'text-white'
$content = $content -replace 'text-slate-600 dark:text-gray-300', 'text-gray-300'
$content = $content -replace 'group-hover:text-slate-800 dark:group-hover:text-white', 'group-hover:text-white'
Set-Content $file $content

# Update ContactSection.tsx
$file = "Portfolio/src/components/sections/ContactSection.tsx"
$content = Get-Content $file -Raw
$content = $content -replace 'from-slate-800 to-slate-600 dark:from-white dark:to-gray-300', 'from-white to-gray-300'
$content = $content -replace 'text-slate-800 dark:text-gray-300', 'text-gray-300'
$content = $content -replace 'text-slate-800 dark:text-white', 'text-white'
$content = $content -replace 'text-slate-600 dark:text-gray-300', 'text-gray-300'
Set-Content $file $content

Write-Host "All section files updated successfully!"
