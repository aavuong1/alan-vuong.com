# Alan Vuong — Mechanical Engineering Portfolio

A responsive, no-build personal portfolio built as plain HTML/CSS/JavaScript for **GitHub Pages**. It uses the November 2026 resume and contains intentionally labeled original concept illustrations until real project images are provided.

## Files

- `index.html` — the page, headings, descriptions, and image references
- `styles.css` — visual layout, desktop/tablet/mobile styling
- `script.js` — mobile navigation and footer year
- `assets/Alan-Vuong-Resume.pdf` — downloadable resume
- `assets/art/` — **placeholder graphics**, not photographs or actual CAD output
- `assets/images/` — put the real project photos here once ready
- `.nojekyll` — makes GitHub Pages serve the static files directly

## Get the site onto GitHub

The target repository is [aavuong1/alan-vuong.com](https://github.com/aavuong1/alan-vuong.com) (observed empty on November 15, 2026).

**Easy method:** Unzip this package. Open the repository in GitHub, choose **Add file → Upload files**, and drag the **contents** of the `alan-vuong-portfolio` folder into the upload area. Commit to the `main` branch. GitHub's browser upload interface may not preserve empty directories, which is fine.

**Command-line method:**

```bash
git clone https://github.com/aavuong1/alan-vuong.com.git
cd alan-vuong.com
# Copy this package's contents into this directory, including index.html
# Do not nest them inside an extra folder.
git add .
git commit -m "Create engineering portfolio"
git push origin main
```

Under **Settings → Pages**, select **Deploy from a branch**, `main`, `/(root)`, and save. The initial URL should be:

`https://aavuong1.github.io/alan-vuong.com/`

The site uses relative asset paths, so it also works after mapping a custom domain. GitHub Pages may take a few minutes to publish the first deployment.

## Replace placeholder images

First, add your own photos or exported CAD/CFD captures to `assets/images/`, ideally compressed JPG or WebP. Then change the indicated `src` values in `index.html`. **Remove the adjacent “CONCEPT VISUAL / PHOTO TO COME” badge** when each image is real. Suggested images and source-file names:

| Project | Suggested filename | Replace current image |
| --- | --- | --- |
| Formula SAE aerodynamics | `formula-sae.jpg` | `assets/art/formula-sae.svg` |
| ACE combat robot | `combat-robot.jpg` | `assets/art/combat-robot.svg` |
| Acura RSX 100+ part assembly | `rsx-cad.jpg` | `assets/art/rsx-cad.svg` |
| Pneumatic robot | `pneumatic-robot.jpg` | `assets/art/pneumatic-robot.svg` |
| Aero Technik | `aerospace.jpg` | `assets/art/aerospace.svg` |

Only include Aero Technik pictures you have permission to share, and remove sensitive or proprietary details. The illustration provided does **not** represent Aero Technik intellectual property.

For athletics, replace the `.athletics-visual` decorative panel in `index.html` with a photo (or ask for help and we can customize the layout).

Preferred image size: 1600–2000 px wide, under approximately 500 KB per image when possible. Keep original photographs out of source control if they contain confidential information.

## Customize

- **Email:** currently `alanvuong04@yahoo.com` (as listed on the resume).
- **GitHub:** `https://github.com/aavuong1`.
- **LinkedIn:** not included because no verified profile URL was supplied. Add when available.
- **Résumé:** replace `assets/Alan-Vuong-Resume.pdf` as you update it.
- **Education:** currently expected 2028.

## Connect GoDaddy custom domain *after* publishing

See [`DOMAIN_SETUP.md`](DOMAIN_SETUP.md) for the exact GitHub Pages and GoDaddy DNS records. The likely intended domain is `alan-vuong.com`, based on the repository name; **confirm that domain in your GoDaddy account before configuring DNS**.

The package intentionally does **not** include a `CNAME` file yet, to avoid sending the early GitHub Pages preview to a domain that may not be configured. Adding your confirmed custom domain through **Settings → Pages** while using branch deployment creates the root `CNAME` automatically.