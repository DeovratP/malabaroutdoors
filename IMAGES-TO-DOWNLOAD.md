# Final step to be 100% WordPress-free: rescue your photos

The site currently loads your photos directly from WordPress's servers.
The moment you delete the WordPress site, those images go blank.

## The easy way (recommended)

1. Log in to WordPress.com → your site → Media library.
   OR go to Tools → Export → download your full media export.
2. Download all photos to your computer.
3. In your GitHub repository, create a folder named `images`
   (Add file → Create new file → type `images/readme.txt` → commit,
   then upload photos into it via Add file → Upload files).
4. Do a find-and-replace in index.html and each file in posts/:
   replace `https://malabaroutdoors.wordpress.com/wp-content/uploads/`
   with `../images/` in post files, and with `images/` in index.html,
   and remove the `?w=1024`-style suffixes.
   (Or just ask Claude to do the replacements — upload the files back.)

## Every image currently used (19 total)

Open each URL in a browser, save the image, keep the same filename:

Homepage + Matho Kangri post:
- .../2021/12/img_20201022_084226.jpg   (hero)
- .../2025/07/img-20250715-wa00201024.jpg
- .../2025/07/picture1.jpg
- .../2025/07/picture2.jpg
- .../2025/07/deovratmap2.jpg

Alps post:
- .../2023/04/mb1.jpg
- .../2023/04/gp.jpg
- .../2023/04/mr.jpg

Mumbai Climate Action post:
- .../2022/04/img_20200822_184640.jpg
- .../2022/04/img_20190612_163006.jpg
- .../2022/04/img-20180801-wa0004.jpg

Norway Sherpa stairs post:
- .../2022/04/1title.jpg
- .../2022/04/sher1.jpg
- .../2022/04/work-1.jpg
- .../2022/04/trail1.jpg
- .../2022/04/harihar.jpg
- .../2022/04/lohgad.jpg

Mumbai-Goa cycling post:
- .../2021/12/boati.jpg
- .../2021/05/kokan.jpg
- .../2021/12/food.jpg
- .../2021/12/road.jpg
- .../2021/12/brg.jpg
- .../2021/12/chipi.jpg
- .../2021/05/collage.jpg

(All prefixed with https://malabaroutdoors.wordpress.com/wp-content/uploads/)

IMPORTANT: Do this BEFORE deleting or making private the WordPress site.
Until then, the new site works fine — it just borrows the images.
