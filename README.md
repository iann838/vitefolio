
# ViteFolio

ViteFolio is a portfolio and academic pages template powered by Vue and [VitePress](https://vitepress.dev).

Demo: https://vitefolio.iann838.com/

## Getting Started

1. Create a new repository using this template.
    > Click "Use this template" button top right.
1. Enter your repository name as `{username}.github.io` (optional).
    > If `{username}.github.io` is used as repository name, then that is your site's domain.
1. Enable GitHub Pages with source GitHub Actions.
    > Settings -> Pages -> Build and Deployment -> Source -> GitHub Actions.
1. Check deployment status at the Actions tab.
    > You might need a rerun due to GitHub Actions not yet being enabled.
1. Access the deployed site on your browser.
    > `https://{username}.github.io` if step 2, else `https://{username}.github.io/{repository}`.

## Local Development

1. Environment requirements:

    - [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
    - [Node.js LTS](https://nodejs.org/en/download/prebuilt-installer)

    For Windows users, ensure that both Git and Node.js is added to PATH during the install process.
    &nbsp;

1. Clone your repository:

    ```sh
    git clone https://github.com/{username}/{repository} {foldername}
    ```

1. Install dependencies:

    ```sh
    npm install
    ```

1. Start development server:

    ```sh
    npm run dev
    ```

1. Access localhost on your browser.

    ```
    http://localhost:5173/
    ```

1. Deploy your new changes.

    ```sh
    git push origin master
    ```

7. Wait for GitHub Action to build.

## Site Configuration

The configuration file is located at `src/.vitepress/config.mts`.

VitePress configuration:

- [Metadata](https://vitepress.dev/reference/site-config#site-metadata)
    - Title
    - Description
    - Favicon
    - Fonts
    - Google Analytics
    - Service workers
    - Language

- [Theme](https://vitepress.dev/reference/default-theme-config)
    - i18nRouting
    - logo
    - siteTitle
    - nav
    - sidebar
    - aside
    - outline
    - socialLinks
    - footer
    - editLink
    - lastUpdated
    - algolia
    - carbonAds
    - docFooter
    - darkModeSwitchLabel
    - lightModeSwitchTitle
    - darkModeSwitchTitle
    - sidebarMenuLabel
    - returnToTopLabel
    - langMenuLabel
    - externalLinkIcon

ViteFolio configuration:

- [Theme](#configuration) (extends VitePress Theme)
    - sidebar
        
        Must be equal to `[{ text: '' }]` to force an empty sidebar for your profile.

        ```ts
        export default {
            themeConfig: {
                sidebar: [{ text: '' }], // DO NOT DELETE force an empty sidebar
            }
        }
        ```

    - profile
        - title: An extra title below your avatar.
        - bio: Short bio or tag line.
        - avatar: Asset link to your avatar.
        - links: Array of `{ icon: string, link: string }`. Supported icons:
            - `'discord'`
            - `'facebook'`
            - `'github'`
            - `'instagram'`
            - `'linkedin'`
            - `'mastodon'`
            - `'npm'`
            - `'slack'`
            - `'twitter'`
            - `'x'`
            - `'youtube'`.
            - `{ svg: '<svg>...</svg>' }` If an icon is not available, it can receive an svg string instead. 

        ```ts
        
        export default {
            themeConfig: {
                profile: {
                    title: '', // hidden if empty
                    bio: "Short biography for the left-hand sidebar",
                    avatar: 'https://www.github.com/iann838.png',
                    links: [
                        { icon: 'github', link: 'https://github.com/iann838' },
                        { icon: 'twitter', link: 'https://twitter.com/youruser' },
                        // or { icon: { svg: '<svg>...</svg>' }, link: '...' }
                    ]
                }
            }
        }
        ```

## Custom domain

You may use a custom domain for your site by going to Settings -> Pages -> Custom domain. After entering your custom domain, ensure that the required CNAME DNS records are also created correctly on your DNS provider.

```
CNAME <recordname> <githubusername>.github.io
```

## Sitemap generation

A sitemap is a file where you provide information about the pages, videos, and other files on your site, and the relationships between them. Search engines like Google read this file to crawl your site more efficiently.

VitePress will automatically generate a sitemap file at `/sitemap.xml` after building. **Replace the sitemap hostname** on your config file to ensure the sitemap content is correct.

```ts
export default {
    sitemap: {
        hostname: 'https://yourhosteddomain.com',
    }
}
```

## Link Routing

Internal links are converted to router link for navigation. Also, every `index.md` contained in each sub-directory will automatically be converted to `index.html`, with corresponding URL `/`.

For example, given the following directory structure:
```
.
├─ src
.  ├─ index.md
.  ├─ foo
.  │  ├─ index.md
   │  ├─ one.md
   │  └─ two.md
   └─ bar
      ├─ index.md
      ├─ three.md
      └─ four.md

```

And providing you are in `foo/one.md`:

```md
[Home](/) <!-- sends the user to the root index.md -->
[foo](/foo/) <!-- sends the user to index.html of directory foo -->
[foo heading](./#heading) <!-- anchors user to a heading in the foo index file -->
[bar - three](../bar/three) <!-- you can omit extension -->
[bar - three](../bar/three.md) <!-- you can append .md -->
[bar - four](../bar/four.html) <!-- or you can append .html -->
```

Pages and internal links get generated with the `.html` suffix by default.

## Asset Handling

```
.
├─ src
│  ├─ index.md
│  ├─ files
│  │  └─ ...
│  └─ ... 
└─ package.json
```

The base directory is `src`, all files inside the base directory is compiled. When referencing files in the base directory, `src/` is ommitted and the reference starts with `/` (e.g. `/index.md`)

It is encouraged to add your non markdown files to the `/assets/` directory, then referencing it using `/assets/...`. For example:

```md
![An image](/assets/image.png)
```

If you put assets next to your markdown files, you can reference assets using relative URLs:

```md
![An image](./image.png)
```

It also allows using external asset URLs:

```md
![An image](https://example.com/image.png)
```

## Vue Components

You can use HTML tags or [Vue components](https://vitepress.dev/guide/using-vue) in markdown files.

ViteFolio has 2 extra grobally imported components:

- `<VFDownload />`
    - `text=`: Display text of your download button.
    - `href=`: URL of the download resource.
    - `as=`: The default filename to be saved as for the download.
    - `theme=`: One of `brand` | `alt` | `sponsor`. Default: `brand`.
    - `size=`: One of `medium` | `big`. Default: `medium`.
- `<VPButton />`
    - `text=`: Display text of your button
    - `href=`: URL to route the user to. Can be local or external.
    - `theme=`: One of `brand` | `alt` | `sponsor`. Default: `brand`.
    - `size=`: One of `medium` | `big`. Default: `medium`.

"Download Paper" button example:

```md
<VFDownload
    text='Download Paper'
    href='/assets/example-file.txt'
    as='publication-a.pdf'
/>
```

## Markdown Extensions

List of markdown extensions supported by the VitePress engine.

- [Header Anchors](https://vitepress.dev/guide/markdown#header-anchors)
- [Tables](https://vitepress.dev/guide/markdown#github-style-tables)
- [Emoji 🎉](https://vitepress.dev/guide/markdown#emoji)
- [Table of Contents](https://vitepress.dev/guide/markdown#table-of-contents)
- [Alerts](https://vitepress.dev/guide/markdown#github-flavored-alerts)
- [Code Blocks](https://vitepress.dev/guide/markdown#syntax-highlighting-in-code-blocks)
- [Markdown File Inclusion](https://vitepress.dev/guide/markdown#markdown-file-inclusion)
- [Math Equations](https://vitepress.dev/guide/markdown#math-equations)
- [Image Lazy Loading](https://vitepress.dev/guide/markdown#image-lazy-loading)
