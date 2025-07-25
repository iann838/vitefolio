# ViteFolio: Portfolio and Academic Pages Template

Welcome to ViteFolio! This is a ready-to-use template for creating a personal portfolio or academic website. It's built on [VitePress](https://vitepress.dev/), a fast and simple tool for generating static websites using Markdown files and Vue.js components. Whether you're a student showcasing projects, a researcher sharing publications, or a professional highlighting your work, this template provides a clean, modern starting point.

ViteFolio is designed as a GitHub template repository. This means you can easily create your own copy and customize it without needing advanced coding skills—though some basic familiarity with text editing will help.

## Key Features
- **Simple Customization**: Edit a single configuration file to add your name, bio, avatar, social links, and more.
- **Markdown-Based Content**: Write your pages using easy-to-learn Markdown syntax (like bold text with ** or lists with -).
- **Responsive Design**: Looks great on desktops, tablets, and mobiles out of the box.
- **Fast and Lightweight**: Powered by Vite for quick loading times.
- **Sections for Portfolios/Academics**: Pre-structured folders for pages like projects, publications, or blog posts.
- **Free Deployment Options**: Easily host on platforms like GitHub Pages or Netlify.

## Getting Started
Follow these steps to set up your own site based on this template. You'll need a computer with [Node.js](https://nodejs.org/) installed (version 14 or higher is recommended—download the LTS version if you're new). No prior experience with web development is required, but we'll explain each step.

### Step 1: Create Your Own Repository
1. Go to the [ViteFolio GitHub page](https://github.com/iann838/vitefolio).
2. Click the green **Use this template** button (near the top-right).
3. Choose **Create a new repository**.
4. Give your new repo a name (e.g., `yourusername.github.io` for GitHub Pages hosting), and make it public if you want it online.
5. Click **Create repository from template**.

This creates a copy of the template under your GitHub account.

### Step 2: Clone the Repository to Your Computer
You'll need to download the files to edit them locally.

1. Install Git if you don't have it: Download from [git-scm.com](https://git-scm.com/).
2. Open a terminal or command prompt on your computer.
3. Run: `git clone https://github.com/YOURUSERNAME/YOUR-REPO-NAME.git` (replace with your repo details).
4. Navigate into the folder: `cd YOUR-REPO-NAME`.

If you're not comfortable with command lines, use GitHub Desktop (download from [desktop.github.com](https://desktop.github.com/)) to clone the repo graphically.

### Step 3: Install Dependencies
Dependencies are the libraries your site needs to run.

1. In your terminal (inside the repo folder), run: `npm install` (or `yarn install` if you prefer Yarn—install Yarn via `npm install -g yarn` first).
   
This installs VitePress and other tools. It might take a minute.

### Step 4: Start the Development Server
1. Run: `npm run dev` (or `yarn dev`).
2. Open a web browser and go to `http://localhost:5173`.
   
You'll see a live preview of your site. Changes you make to files will update automatically!

To stop the server, press Ctrl+C in the terminal.

## Project Structure
Here's how the files are organized in your new repository. This follows VitePress conventions, with the `src` folder as the main root for your content.

```
vitefolio/  (your repo root)
├── src/                # Main folder for your site's content and config
│   ├── .vitepress/     # Configuration and internal files (don't edit most of these directly)
│   │   └── config.mts  # Key file! Edit this for your personal info (e.g., name, bio, links)
│   ├── index.md        # Your homepage—edit this to introduce yourself
│   ├── foo/            # Example section (rename to e.g., "projects" or "publications")
│   │   ├── index.md    # Landing page for this section
│   │   ├── one.md      # A sample sub-page (add your content here)
│   │   └── two.md      # Another sample sub-page
│   └── bar/            # Another example section (rename as needed)
│       ├── index.md    # Landing page for this section
│       ├── three.md    # Sample sub-page
│       └── four.md     # Sample sub-page
└── public/             # Folder for static files like images or PDFs
    └── example-file.txt  # Example—add your avatar image or resume here
```

- **src/**: This is where your website lives. Add or edit Markdown (.md) files here to create pages.
- **src/.vitepress/config.mts**: The "brain" of your site. It's a TypeScript file (like JavaScript but with extras). Open it in a text editor (e.g., VS Code—free from [code.visualstudio.com](https://code.visualstudio.com/)) and update sections like site title, description, your profile, and navigation.
- **Markdown Files (.md)**: These turn into web pages. Use simple formatting:
  - `# Heading for titles`.
  - `- Bullet lists`.
  - `[Link](https://example.com)` for hyperlinks.
  - `![Image](path/to/image.png)` for pictures (put images in `public/`).
- **public/**: Drop in files that don't change, like your photo or CV. Reference them in Markdown with paths like `/your-image.png`.

For more on VitePress structure, see their [guide on project structure](https://vitepress.dev/guide/routing#project-root).

## Customization
Make it your own! Here's how to personalize your site. Most changes happen in `src/.vitepress/config.mts`. This file uses a simple object structure—think of it as a list of key-value pairs where you can update the values.

### VitePress Configuration Options
ViteFolio builds on VitePress, so you can configure standard site metadata and theme settings. These are set at the top level or under `themeConfig` in the config file. For full details, refer to the [VitePress site metadata docs](https://vitepress.dev/reference/site-config#site-metadata) and [default theme docs](https://vitepress.dev/reference/default-theme-config). Here's a beginner-friendly explanation of key options:

- **Metadata** (basic site info, set at the root of the exported object):
  - `title`: The main title of your site, shown in the browser tab and headers (e.g., 'My Portfolio').
  - `description`: A short summary of your site, used for search engines (e.g., 'Personal portfolio of John Doe, software engineer').
  - `head`: An array for custom HTML in the <head> tag, like favicon (site icon): Add `['link', { rel: 'icon', href: '/favicon.ico' }]`. Upload your favicon to `public/`.
  - `lang`: The language of your site (e.g., 'en-US' for English).
  - Other advanced options: Fonts (via Google Fonts links in `head`), Google Analytics (add script tags), service workers (for offline support), etc. Start simple and add as needed.

- **Theme** (look and feel, set under `themeConfig`):
  - `i18nRouting`: Enable if supporting multiple languages (true/false).
  - `logo`: Path to a logo image next to the site title (e.g., '/logo.png').
  - `siteTitle`: Override the title in the navigation bar (defaults to metadata title).
  - `nav`: Array of navigation links at the top (e.g., [{ text: 'Home', link: '/' }, { text: 'Projects', link: '/projects/' }]).
  - `sidebar`: Array of sidebar menu items (see ViteFolio-specific notes below for a required tweak).
  - `aside`: Show/hide the right-hand aside panel (true/false/'toc' for table of contents).
  - `outline`: Customize the on-page outline (e.g., { level: [2, 3] } to show headings levels 2-3).
  - `socialLinks`: Array of social icons in the footer (e.g., [{ icon: 'github', link: 'https://github.com/yourusername' }]).
  - `footer`: Custom footer text (e.g., { message: '© 2025 Your Name', copyright: true }).
  - `editLink`: Link to edit pages on GitHub (e.g., { pattern: 'https://github.com/yourusername/your-repo/edit/main/src/:path', text: 'Edit this page' }).
  - `lastUpdated`: Show last updated timestamp (true/false or options like { text: 'Updated on' }).
  - `algolia`: Integrate Algolia search (requires API keys).
  - `carbonAds`: Add Carbon Ads (requires account).
  - `docFooter`: Customize prev/next links at page bottom (e.g., { prev: 'Previous', next: 'Next' }).
  - `darkModeSwitchLabel`: Label for dark mode toggle (e.g., 'Appearance').
  - `lightModeSwitchTitle` / `darkModeSwitchTitle`: Tooltips for mode switches (e.g., 'Switch to Light').
  - `sidebarMenuLabel`: Label for mobile sidebar menu (e.g., 'Menu').
  - `returnToTopLabel`: Label for back-to-top button (e.g., 'Back to top').
  - `langMenuLabel`: Label for language menu if using i18n (e.g., 'Languages').
  - `externalLinkIcon`: Show icon for external links (true/false).

Example in `config.mts`:
```typescript
export default {
  title: 'My Portfolio',
  description: 'Showcasing my work',
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }],
    // Add more options here
  }
}
```

### ViteFolio-Specific Configuration
ViteFolio extends the VitePress theme with custom features, mainly under `themeConfig`. These add a personal profile sidebar and require a specific sidebar setup.

- **sidebar** (under `themeConfig`):
  - To display your profile in the left sidebar, set this to `[{ text: '' }]`. This forces an empty sidebar menu, making room for the profile. Do not delete or change this unless you want a standard sidebar.
  ```typescript
  themeConfig: {
    sidebar: [{ text: '' }], // DO NOT DELETE: Forces empty sidebar for profile
  }
  ```

- **profile** (under `themeConfig`):
  - `title`: An optional extra title below your avatar (e.g., 'Software Engineer'). Hidden if empty.
  - `bio`: A short biography or tagline shown below the title (e.g., 'Passionate about web development and open source').
  - `avatar`: Path or URL to your profile image (e.g., '/avatar.png'—upload to `public/`).
  - `links`: Array of social or external links. Each item has:
    - `icon`: Predefined icon name like 'github', 'x', 'linkedin', 'youtube', 'instagram', 'facebook', 'discord', 'mastodon', 'slack', 'npm'. Or custom: { svg: '<svg>...</svg>' }.
    - `link`: The URL (e.g., 'https://github.com/yourusername').
    - `text`: Optional display text (defaults to the last part of the URL, like 'yourusername').

  Example:
  ```typescript
  themeConfig: {
    profile: {
      title: 'Software Engineer', // Hidden if empty
      bio: 'Short biography for the left-hand sidebar',
      avatar: 'https://www.github.com/iann838.png', // Or local path like '/avatar.png'
      links: [
        { icon: 'github', link: 'https://github.com/iann838' },
        { icon: 'x', link: 'https://x.com/iann838' },
        // { icon: { svg: '<svg>...</svg>' }, link: 'https://example.com' }
      ]
    }
  }
  ```

### Add or Edit Pages
- Create a new folder in `src/` for a section, e.g., `projects/`.
- Inside it, add `index.md` for the main page, and other .md files for sub-pages.
- VitePress supports extras like tables, code blocks, and emojis in Markdown. See [VitePress Markdown guide](https://vitepress.dev/guide/markdown) for tips.

### Change the Theme
- Customize colors, layout, etc., via `themeConfig` (as above).
- For advanced changes, extend the theme—check [VitePress theming docs](https://vitepress.dev/guide/custom-theme).

### Add Images or Media
- Place files in `public/`.
- In Markdown: `![Alt text](/filename.png)`.

If you're new to Markdown, try an online editor like [dillinger.io](https://dillinger.io/) to practice.

## Link Routing
VitePress automatically handles links between pages. Internal links use the site's router for smooth navigation. Every `index.md` in a sub-directory becomes `/directory/` (e.g., `src/foo/index.md` is `/foo/`).

Example directory:
```
src/
├─ index.md      # /
├─ foo/
│  ├─ index.md   # /foo/
│  ├─ one.md     # /foo/one
│  └─ two.md     # /foo/two
└─ bar/
   ├─ index.md   # /bar/
   ├─ three.md   # /bar/three
   └─ four.md    # /bar/four
```

From `foo/one.md`:
```md
[Home](/) <!-- To root -->
[Foo](/foo/) <!-- To foo index -->
[Foo Heading](./#heading) <!-- Anchor in current dir -->
[Bar Three](../bar/three) <!-- Relative, omit .md -->
[Bar Three](../bar/three.md) <!-- With .md -->
[Bar Four](../bar/four.html) <!-- With .html -->
```

Pages generate with `.html` suffixes by default (e.g., `/foo/one.html`), but links work without them.

## Public Directory

The `public/` folder in your repository is a special directory for storing static assets—files that don't need to be processed by VitePress during the build process. These could include configuration files for search engines, icons, downloadable documents, media, or any other resources you want to serve directly without modification. During the site build (e.g., when you run `npm run build`), all files in `public/` are automatically copied to the root of the output directory (`dist/`) exactly as they are, preserving their original filenames and structure.

This is useful for:
- Site metadata files like `robots.txt` (controls search engine crawling) or `sitemap.xml` (though VitePress can generate sitemaps automatically—see the Sitemap Generation section).
- Favicons (e.g., `favicon.ico` for browser tabs—reference in your config's `head` array).
- Downloadable files like PDFs (e.g., your resume or publications), videos, audio clips, or large images.
- Any other static content not directly embedded in your Markdown pages or Vue components.

### How to Use It
1. **Adding Files**: Simply place your files directly into the `public/` folder at the root of your repository. You can organize them into subfolders if needed (e.g., `public/images/` or `public/downloads/`), and the structure will be preserved in the built site.

2. **Referencing Files**: Always use root-absolute paths starting with `/` when linking to these files in your Markdown, config, or components. This ensures they resolve correctly regardless of the page's URL.
   - For a file at `public/example-file.txt`, reference it as `/example-file.txt`.
   - For a subfolder like `public/downloads/paper.pdf`, use `/downloads/paper.pdf`.

   Examples in Markdown:
   - Link to a PDF: `[Download Resume](/resume.pdf)`
   - Embed an image: `![Profile Photo](/images/profile.jpg)`
   - In your config.mts (e.g., for avatar): `avatar: '/avatar.png'`

3. **Example: File Download Button with VFDownload**
   Use the custom `<VFDownload />` component to create a styled button for downloads:
   ```md
   <VFDownload text='Download Paper' href='/example-file.txt' as='publication-a.txt'/>
   ```
   - This renders a button labeled "Download Paper" that links to `/example-file.txt` (from `public/`) and suggests saving it as `publication-a.txt`.
   - Tip: Upload your file to `public/example-file.txt` first.

Browsers and development servers cache static files aggressively. After adding or updating files in `public/`, you might not see changes immediately. Force a refresh with Ctrl+F5 (or Cmd+Shift+R on Mac) in your browser to clear the cache. In production, consider versioning filenames (e.g., `resume-v2.pdf`) for cache busting.

## Buttons and Downloads

VitePress lets you add interactive elements to Markdown using HTML or [Vue components](https://vitepress.dev/guide/using-vue).

ViteFolio provides two global components for buttons, usable directly in .md files.

### `<VFDownload />`: For Downloads
Creates a button to download files (e.g., PDFs from `public/`).

Props:
- `text`: Button label (required, e.g., 'Download Paper').
- `href`: File URL (required, e.g., '/resume.pdf').
- `as`: Suggested save name (optional, e.g., 'my-resume.pdf').
- `theme`: 'brand' (default), 'alt', or 'sponsor'.
- `size`: 'medium' (default) or 'big'.

Example:
```md
<VFDownload text="Download Resume" href="/resume.pdf" as="John_Doe_Resume.pdf" />
```

### `<VPButton />`: General Button
For links to pages or sites.

Props:
- `text`: Button label (required, e.g., 'View Project').
- `href`: URL (required, e.g., '/projects/' or 'https://github.com/').
- `theme`: 'brand' (default), 'alt', or 'sponsor'.
- `size`: 'medium' (default) or 'big'.

Example:
```md
<VPButton text="View on GitHub" href="https://github.com/yourusername" />
```

## Markdown Extensions
VitePress supports enhanced Markdown:

- [Header Anchors](https://vitepress.dev/guide/markdown#header-anchors): Auto-links on headings.
- [Tables](https://vitepress.dev/guide/markdown#github-style-tables): GitHub-style.
- [Emoji 🎉](https://vitepress.dev/guide/markdown#emoji): Standard emojis.
- [Table of Contents](https://vitepress.dev/guide/markdown#table-of-contents): Use [[[toc]]].
- [Alerts](https://vitepress.dev/guide/markdown#github-flavored-alerts): > [!NOTE] for notes, tips, etc.
- [Code Blocks](https://vitepress.dev/guide/markdown#syntax-highlighting-in-code-blocks): Syntax highlighting.
- [Markdown File Inclusion](https://vitepress.dev/guide/markdown#markdown-file-inclusion): Embed other .md files.
- [Math Equations](https://vitepress.dev/guide/markdown#math-equations): LaTeX with $$.
- [Image Lazy Loading](https://vitepress.dev/guide/markdown#image-lazy-loading): Auto-lazy for images.

## Building and Deployment
When ready to share:

### Build the Site
1. Run: `npm run build` (or `yarn build`).
2. This creates a `dist/` folder with static files.

### Deploy to GitHub Pages (Free and Easy)
GitHub Pages is a free hosting service for static websites, perfect for your ViteFolio site. It supports deployment directly via GitHub Actions, which automates building and publishing your site whenever you push changes to the main branch. This means no need for a separate deployment branch like `gh-pages`—everything happens through workflows.

The ViteFolio template includes a pre-configured GitHub Actions workflow (located in `.github/workflows/`), which handles building your VitePress site and deploying it automatically on pushes to the `main` branch. If you're using this template as-is, you won't need to create a new workflow; GitHub will detect and use the existing one.

#### Prerequisites
- Ensure you have admin or maintainer permissions on the repository.
- Your repository must be public for free GitHub Pages hosting (private repos require a paid GitHub plan like Pro or Team).
- GitHub Actions should be enabled in your repo (it's usually on by default, but check under Settings > Actions > General if needed).

#### Step-by-Step Setup
1. **Enable GitHub Pages with GitHub Actions as the Source**:
   - Go to your repository on GitHub.
   - Click **Settings** at the top of the page (if it's not visible, use the dropdown menu under the repo name).
   - In the left sidebar, under "Code and automation," click **Pages**.
   - Scroll to the "Build and deployment" section.
   - Under "Source," select **GitHub Actions** from the dropdown.
   - If prompted to choose a workflow template, you can skip or select one, since the template already has a workflow, GitHub will use it automatically.

2. **Trigger the Initial Deployment**:
   - After enabling Pages, the deployment won't start automatically. You need to trigger it by making a change and pushing to the `main` branch.
   - For example: Edit a file (like adding a space to `README.md` or your config file), commit the change with a message like "Trigger initial deployment," and push it to GitHub (e.g., `git add .`, `git commit -m "Trigger deployment"`, `git push`).
   - Alternatively, for a manual trigger without changes: Go to the **Actions** tab in your repo, select the workflow (it might be named something like "Deploy VitePress site"), and click **Run workflow** > **Run workflow** on the main branch.

3. **Check Deployment Status**:
   - Head to the **Actions** tab in your repository.
   - Look for the running or recent workflow (it should appear shortly after your push or manual run).
   - Click on the workflow run to view detailed logs. If it fails (e.g., due to build errors), check the logs for clues—common issues include missing dependencies or config mistakes.
   - You might need to rerun the workflow if GitHub Actions wasn't fully enabled yet or if there's a temporary glitch: Click the three dots on the run > **Re-run all jobs**.
   - Deployments usually take 1-5 minutes. Refresh the Actions page to monitor progress.

4. **Access Your Deployed Site**:
   - Once the workflow succeeds (look for a green checkmark), your site is live.
   - Visit it at: `https://{username}.github.io` if your repo is named `{username}.github.io`, or `https://{username}.github.io/{repository}` for other repo names (replace `{username}` and `{repository}` with yours).
   - If it doesn't appear immediately, wait a few minutes or clear your browser cache.

Other options: Netlify, Vercel. See [VitePress deployment guide](https://vitepress.dev/guide/deploy).

## Custom Domain

Using a custom domain (e.g., www.yourname.com) makes your GitHub Pages site look more professional. GitHub provides free HTTPS certificates via Let's Encrypt.

### Prerequisites
- GitHub Pages must be enabled and deployed.
- Own a domain from a registrar (e.g., Namecheap).
- DNS changes may take up to 24 hours to propagate.

### Setup Steps
1. **Add Domain in GitHub**:
   - Repo Settings > Pages > Custom domain.
   - Enter your domain (e.g., www.yourname.com) and Save. GitHub checks DNS and adds a CNAME file if needed.

2. **Configure DNS Records**:
   - In your DNS provider's panel:
     - **Subdomain (e.g., www)**: CNAME record – Name: www, Value: username.github.io.
     - **Apex (e.g., yourname.com)**: A records to 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153; AAAA for IPv6: 2606:50c0:8000::153, etc. Or use ALIAS to username.github.io.
   - Add both for apex and www if needed—GitHub handles redirects.

3. **Verify**:
   - GitHub Pages shows DNS status. Use `dig yourdomain.com` to check.
   - HTTPS activates automatically.


## Sitemap Generation

A sitemap lists your site's pages to help search engines like Google index them better, improving visibility.

VitePress auto-generates `/sitemap.xml` on build (via `npm run build`).

Configure in `src/.vitepress/config.mts`:
```typescript
export default {
  // themeConfig: { ... other config }
  sitemap: {
    hostname: 'https://yourhosteddomain.com', // Required: Your site's URL
  }
}
```

Rebuild to generate; submit to Google Search Console. See [VitePress guide](https://vitepress.dev/guide/sitemap-generation) for more.

## Troubleshooting
- **Errors during install?** Update Node.js and try `npm cache clean --force`.
- **Page not found?** Check file paths—e.g., `src/about.md` is `/about`.
- **Need help?** Check [VitePress docs](https://vitepress.dev/) or GitHub issues.

Happy building! Start small, edit one file at a time, and preview often. 🚀
