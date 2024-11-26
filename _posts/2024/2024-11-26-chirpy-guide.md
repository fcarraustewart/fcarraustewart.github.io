---
title: "Set Up and Deploy a Documentation Site With Jekyll & Chirpy"
date: 2024-11-26 08:00:00 - 0000
categories: [Web Development, Jekyll]
tags: [Jekyll, Chirpy, GitHub Actions, Git]
author: digitalden
image: 
  path: /assets/img/headers/jekyll2.webp
  lqip: data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAAAwAwCdASoUAAwAPzmGuVOvKSWisAgB4CcJaQAAUqcyf8p4AP3Sdf++BU9dTgce48YBk3FazVP1oSWiXpyZt1q9TPl8mBK0AAA=
---
 This documentation outlines the steps for setting up and deploying a documentation site using Jekyll, a popular static site generator, and the Chirpy theme using GitHub Actions.
 
## Objectives

- Deploy the site to GitHub Pages using GitHub Actions
- Personalize the Jekyll site configuration and the about me page
- Write your first post with Chirpy using Markdown syntax
- (Optional) Map a custom domain to your GitHub Pages site

By the end of this post, you will have your own documentation site hosted on GitHub Pages, a free hosting solution. The site will be set up with the Chirpy theme, which provides a beautifully structured layout and various features automatically. You can then focus on writing your content in Markdown, committing it to a Git repository, and let Chirpy and GitHub Actions handle the rest.

## Prerequisites
- GitHub Account

## Set Up the Chirpy theme with the Chirpy Starter template

Creating a new site with the Chirpy theme is straightforward using the Chirpy Starter. This method is preferred for its simplicity and maintenance ease, technical writers who wish to focus on their content rather than the technical aspects of website setup.

#### **a) Use the Chirpy Starter Template**
   - Visit the [Chirpy Starter Repository](https://github.com/cotes2020/chirpy-starter) on GitHub.**
   - Click on the `Use this template` button at the repository page.
   - Name the new repository `USERNAME.github.io`, where `USERNAME` is your GitHub username. This naming is crucial for GitHub Pages to automatically host the site.
   - Ensure the repository is set to `public`. GitHub Pages requires the repository to be public to serve the website unless you are on a GitHub plan that supports private repositories for GitHub Pages.
   - Click `Create repository from template` to initiate the new repository setup.

> Your site will be available at `https://USERNAME.github.io`
{: .prompt-tip }

### **a) The GitHub Actions Workflow**

The GitHub Actions workflow, specifically tailored for Jekyll deployments, is structured to facilitate seamless builds and deployments. Here’s a breakdown of its components:

- **Navigate to Workflow:** 
   - Access the `workflows` folder within the .github directory.
   - Open the `pages-deploy.yaml` file to examine the workflow details.

-  **Workflow Overview:**
   - The workflow is named Build and Deploy.
   - It activates on pushes to both the main and master branches, with exceptions for changes to .gitignore, README.md, and LICENSE files. Manual triggers are also supported.
   - It's configured with read permissions for contents and write permissions for pages and ID tokens, ensuring secure and authorized operations.
   - Designed to run a single deployment at a time, it cancels any in-progress deployments upon new pushes to streamline the update process.

-  **Jobs Detail:**
   - Utilizes the latest Ubuntu runner for operations like checking out the code, setting up GitHub Pages, configuring Ruby, building the site via Jekyll, performing tests with htmlproofer, and uploading the site as an artifact for deployment.
   - Focuses on deploying the built site to GitHub Pages and providing a URL to the deployed site.

### **b) Configure GitHub Pages Deployment**

To ensure your site deploys via GitHub Actions to GitHub Pages, a few configuration steps are necessary within your GitHub repository settings:

-  **Access Repository Settings:** 
   - Navigate to your GitHub repository online and enter the settings menu.

- **Locate Pages Section:** 
   - Within the settings, find and click on the Pages option on the left navigation bar to access GitHub Pages settings.

-  **Deployment Source Setup:**
   - In the Build and deployment section, find the Source setting.
   - Choose `GitHub Actions` from the dropdown menu to enable deployments through GitHub Actions.

This setup ensures that every push to your repository triggers the GitHub Actions workflow, automatically building your Jekyll site and deploying it to GitHub Pages. It's a streamlined process that simplifies site updates, allowing you to focus more on content creation and less on manual deployment tasks.

> **Tip:** For users of GitHub's free tier, keep your repository public to utilize GitHub Pages without any costs.
{: .prompt-tip}

### **c) Set the Site URL for GitHub Pages**

Before pushing your Jekyll site to GitHub, configure the `_config.yml` file to set your site's URL and personalize various settings.

> GitHub Pages requires the correct base URL to serve your site. This is a critical step for your site's accessibility and functionality.
{: .prompt-warning }

-  Open the `_config.yml` file and find the `url` field, which sets the base URL for your site. 
   For example, if your GitHub   username is digitalden3, your url would be:

   ```yaml
url: "https://digitalden3.github.io"
   ```
   {: .nolineno }

   - By setting the url, you enable GitHub Pages to host your site at a predictable address based on your username.

### **d) Personalize the Jekyll Site Configuration**

With the URL set, continue to personalize your site by updating these important fields in the `_config.yml` file:

- **title tagline and description**: 
  - Define your site's title and description to improve search engine optimization (SEO).

- **timezone**:
  - Set the correct timezone to ensure your posts have accurate timestamps. 
  - Use a [Time Zone Picker](https://kevinnovak.github.io/Time-Zone-Picker) to find your timezone string.

- **username**: 
  - Enter your social media usernames (github.username, twitter.username...).

- **name and email**: 
  - Provide your full name and email address under the social section for use in site elements like the footer.

- **theme_mode**: 
  - Choose your theme preference. Light, dark, or automatic.

- **avatar**: 
   - Add a profile picture.
     - Store your images in an organized directory, such as assets/images/.
     - Upload your preferred image to this directory.
     - Reference your avatar in the avatar field:

   ```yaml
avatar: "/assets/images/your-image.jpg"
   ```
   {: .nolineno }

> To ensure your site loads quickly, optimize your images! Use efficient image formats, such as WebP.
{: .prompt-tip }

### e)Deploy the Jekyll Site with GitHub Actions

Deploying your Jekyll site to GitHub Pages using GitHub Actions automates the build and publish process, making site updates seamless with every push.

-  **Stage Your Changes**:
    - Go to the Git panel menu and choose Stage All Changes.
    - Choose Stage All Changes.

-  **Commit Your Changes**:
    - In the Source Control panel, you should see a text box where you can enter a commit message.
    - Enter Deploying Jekyll Site.
    - Go to the Git panel menu and choose Commit All.

-  **Push Changes to GitHub**:
    - Go to the Git panel menu and choose Push. This action will push your commits to the GitHub repository, triggering the GitHub Actions workflow.

-  **Deployment via GitHub Actions:**
    - Navigate to your GitHub repository in a web browser.
    - Click on the `Actions` tab near the top of the repository page. This is where all the automated workflows are listed.
    - Inside the Actions tab, you'll see a list of all the workflow runs. Each run corresponds to a push you've made to the repository.
    - Click on the latest run to see the details of the workflow execution, including setup, build, and deployment steps.
    - After the GitHub Actions workflow completes, your site will be live. GitHub will provide a URL where your site is hosted, which will typically follow this format:
      - `https://<username>.github.io`

## Personalize the About Me Page

Update your About Me page on your Jekyll site to reflect your personality, professional journey, hobbies, and more. You can also add images.

-  **Edit the About Me Page**:
    - Navigate to `_tabs/about.md` in your project files this file is where you'll introduce yourself and share your story.

-  **Incorporate Your Personal Story**:
    - Begin by writing about yourself. You might include your background, what you do professionally, your passions, and the purpose of your site.

-  **Upload Images**:
    - To add images, go to the `assets/img` directory.
    - Select File → Upload Local Files.

-  **Insert an Image in Your About Me Page**:
    - Add the following line of markdown to `_tabs/about.md` to include an image. Ensure to replace `profileimage.jpg` with the actual name of your uploaded image file.

    ```markdown
![About](/assets/img/profileimage.jpg)
    ```
    {: .nolineno }

-  **Save Your Changes**:
    - After editing and adding images, save the`about.md file.

-  **Deploying Changes to GitHub**
    - Stage All Changes in the Git panel → Enter a message and commit → Push changes to deploy via GitHub Actions.

## Write the First Post with Chirpy Using Markdown Syntax

Creating a new post in Jekyll using the Chirpy theme is straightforward. Chirpy enhances Jekyll with unique features and requires specific variables in posts.

> Markdown is a lightweight markup language with plain text formatting syntax that is designed to be converted to HTML and other formats. It's very simple to use and allows you to write rich content with plain text.
{: .prompt-info }

For better management, organize posts within the `_posts` folder by year (2023, 2024...). This helps keep your directory structured without affecting post processing.

-  **File Naming:**
   - Place your post in the correct year folder within `_posts`, naming it `YYYY-MM-DD-TITLE.MD`

-  **Front Matter**
   - Use the following template at the start of your post:

```yaml
---
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS +/-TTTT
categories: [Primary Category, Subcategory]
tags: [tag1, tag2, tag3]
image: /path/to/image
alt: "Image alt text"
---
```
{: .nolineno }

- **title:** The title of your post.
- **date:** The publication date and time of your post, including the timezone.
- **categories:** Categories for organizing your post, limited to two.
- **tags:** Keywords associated with your post for tagging purposes.
- **image:** An optional path to a preview image for your post.
- **alt:** Descriptive text for the preview image, used for accessibility and SEO.

Following these initial steps sets up an empty post scaffold. To fill your post with content, you'll write in Markdown, a straightforward yet powerful syntax for creating web content. For detailed guidance, including Markdown syntax and advanced Chirpy features, consult the:
- [Chirpy documentation on writing a new post](https://chirpy.cotes.page/posts/write-a-new-post/)

> The Jekyll Chirpy theme automatically transforms your Markdown content into a visually appealing website. By applying CSS for styling, HTML templates for structure, and JavaScript for interactivity, Chirpy ensures your content is readable, engaging and professionally presented.
{: .prompt-tip }

**Workflow:** 
: `Write Post` → `Preview` → `Stage New Post` → `Commit` → `Push to GitHub` → `Deployment`

## Map a Custom Domain to GitHub Pages (Optional)

GitHub Pages offers free hosting for websites, allowing the use of custom domains to improve brand identity, SEO, and more. This guide explains the process of mapping a custom domain to GitHub Pages, taking advantage of GitHub's secure hosting.

When opting for a subdomain, such as `docs.example.com`, over the primary domain (example.com), you strategically organize and differentiate content. A subdomain like docs specifically earmarks this section for documentation, facilitating centralized content management.
 - For implementation, replace example.com with your own domain.

### a) Create a CNAME File 
   - Right-click, choose New File, and name it `CNAME`—no file extension.
   - Open CNAME, input `docs.example.com`, and save.

### b) Push the CNAME File to GitHub
   - Follow the sequence: `Stage CNAME` → `Commit` → `Push to GitHub` → `Deployment`.

### c) Set Custom Domain in GitHub Pages Settings
   - In your GitHub repository settings, select `Pages`
   - Under Custom domain, enter `docs.example.com` and save.

   > A DNS record error may initially appear—this resolves after proper DNS setup.
   {: .prompt-warning }

### d) Create a CNAME Record
### e) Verify DNS Configuration
   - Confirm DNS setup with:
     ```
     dig docs.example.com +nostats +nocomments +nocmd
     ```

      - GitHub Pages will show DNS checks in progress after correct DNS setup.
      - Post-DNS verification, enable `Enforce HTTPS` in GitHub Pages settings.
      - GitHub automatically secures your site with an SSL certificate, a process that may take up to 24 hours.

### f) Update URL in _config.yml to Custom Subdomain
   - Open the `_config.yml` file in the root directory of your Jekyll project.
   - Find the `url` field in the _config.yml file. It might look something like this:
     ```yaml
url: "https://USERNAME.github.io"
     ```
     {: .nolineno }
   - Update the url field to use your custom subdomain. Replace `https://USERNAME.github.io` with `https://docs.example.com` 
     ```yaml
url: "https://docs.example.com"
     ```
     {: .nolineno }
   - Save the changes to the _config.yml file.
   
   > By updating the urL field in your _config.yml file to `https://docs.example.com`, you ensure that all internal links, metadata, and references within your Jekyll site point to the correct custom subdomain. This step is crucial for maintaining consistency and accuracy across your site, especially when using a custom domain. 
   {: .prompt-tip }

   - After making this change, push the updated `_config.yml` file to your GitHub repository.

Your GitHub Pages site will be accessible via your custom domain `docs.example.com`, leveraging GitHub's secure and reliable hosting.

## Video Tutorial
{% include embed/youtube.html id='7cLkDE8_tCI' %}


## Posting in your site tutorial:
> Felipe Carrau Stewart. (info)[https://fcarraustewart.github.io/about].
   {: .prompt-tip }
