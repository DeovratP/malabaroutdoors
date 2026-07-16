# Malabar Outdoors — GitHub Pages Setup Guide

Follow these steps once. Total time: ~20 minutes (plus DNS wait).

## Part 1 — Put the site on GitHub

1. Create a free account at github.com (if you don't have one).
2. Click **New repository**. Name it exactly: `<your-username>.github.io`
   (e.g. if your username is `deovratphal`, name it `deovratphal.github.io`).
   Keep it **Public**. Click Create.
3. On the repo page, click **Add file → Upload files**.
   Upload index.html, CNAME, and the entire posts folder from this package. Commit.
   (To upload the posts folder: drag the whole folder into the upload area.)
4. Wait 1–2 minutes, then visit `https://<your-username>.github.io` —
   your site should be live there already.

## Part 2 — Connect malabaroutdoors.com

### In GitHub
1. In your repository: **Settings → Pages**.
2. Under **Custom domain**, type `malabaroutdoors.com` and Save.
   (The CNAME file you uploaded does the same thing — this just confirms it.)

### In Namecheap (Advanced DNS for malabaroutdoors.com)
1. **DELETE the two existing URL Redirect Records** (@ and www).
   They will conflict with the new setup.
2. Add these five records:

   | Type         | Host | Value                     | TTL       |
   |--------------|------|---------------------------|-----------|
   | A Record     | @    | 185.199.108.153           | Automatic |
   | A Record     | @    | 185.199.109.153           | Automatic |
   | A Record     | @    | 185.199.110.153           | Automatic |
   | A Record     | @    | 185.199.111.153           | Automatic |
   | CNAME Record | www  | <your-username>.github.io | Automatic |

   (Replace <your-username> with your actual GitHub username.
   Keep the TXT record for email forwarding — don't delete it.)

3. Wait 30 minutes to a few hours for DNS to propagate.

### Back in GitHub
1. Settings → Pages: once the domain shows a green check,
   tick **Enforce HTTPS**. GitHub issues a free SSL certificate
   automatically (can take up to 24 hours to appear).
2. Done: https://malabaroutdoors.com now loads YOUR site,
   with a padlock, domain staying in the address bar.

## Part 3 — malabarexpeditions.com (optional)

Simplest option: in Namecheap, give it two URL Redirect Records
(@ and www → https://malabaroutdoors.com). Once the main domain has
real HTTPS, redirecting the second domain to it works cleanly.

## Adding a new post later

1. Duplicate one of the `<a class="entry">...</a>` blocks in index.html.
2. Change the altitude, place, date, title, excerpt, link and image.
3. Upload the edited index.html to GitHub (Add file → Upload files →
   overwrite). The site updates in ~1 minute.

Tip: host new photos in the repo itself — create an `images/` folder,
upload photos there, and reference them as `images/photo.jpg`.
The current site borrows images from your WordPress media library;
they'll keep working as long as the WordPress site exists, but move
them into the repo before you delete WordPress.

## Email forwarding warning

Your @malabaroutdoors.com email forwarding currently runs through
Namecheap and requires their mail-related DNS records. The A/CNAME
records above don't touch mail, but if email forwarding stops working
after the change, re-check that the MX records under "Mail Settings →
Email Forwarding" are still present in Namecheap.
