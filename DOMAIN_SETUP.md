# Connect GoDaddy domain to GitHub Pages

These instructions assume that the GoDaddy domain you own is **alan-vuong.com**. Verify the spelling and domain ownership before proceeding. Do this only after the site has been published successfully at `https://aavuong1.github.io/alan-vuong.com/`.

### 1. Register the domain in GitHub Pages first

In `https://github.com/aavuong1/alan-vuong.com/settings/pages`:

1. Confirm publishing is from the `main` branch, `/(root)`.
2. Under **Custom domain**, enter `alan-vuong.com` and click **Save**. With branch publishing, GitHub usually adds a root `CNAME` file automatically.
3. GitHub recommends verifying your domain through GitHub's domain verification flow to help prevent domain takeover.

### 2. Point the DNS to GitHub Pages

At GoDaddy, open **My Products → your domain → DNS → Manage DNS** (menu names may differ). This works only if GoDaddy is your active DNS host; if you changed nameservers to another DNS provider, edit the records with that provider instead.

Create or update the following records **only for website hosting**:

| Type | Name / Host | Points to / Value | TTL |
| --- | --- | --- | --- |
| A | `@` | `185.199.108.153` | default or 1 hour |
| A | `@` | `185.199.109.153` | default or 1 hour |
| A | `@` | `185.199.110.153` | default or 1 hour |
| A | `@` | `185.199.111.153` | default or 1 hour |
| CNAME | `www` | `aavuong1.github.io` | default or 1 hour |

Keep all four `@` A records, and point `www` directly to **`aavuong1.github.io`**, *not* `aavuong1.github.io/alan-vuong.com` and not `alan-vuong.com`.

Remove only old/conflicting **website** A/CNAME records for `@` or `www` that point elsewhere; **do not delete MX, SPF/TXT, DKIM, or other email-related records**. Avoid wildcard `*` DNS records for Pages.

### 3. Enforce HTTPS

In GitHub **Settings → Pages**, wait until the DNS check succeeds and the certificate is ready, then turn on **Enforce HTTPS**. GitHub says DNS changes can take up to 24 hours to propagate. The certificate option can also take time to become available.

Then check both:
- `https://alan-vuong.com`
- `https://www.alan-vuong.com`

They should resolve to the same site, with GitHub handling the redirect between apex and `www`.

### 4. Verify on Windows (optional)

Open PowerShell and run:

```powershell
Resolve-DnsName alan-vuong.com -Type A
Resolve-DnsName www.alan-vuong.com -Type CNAME
```

Expected: the four GitHub Pages IPv4 records for the apex and `aavuong1.github.io` for `www`.

### References

- [GitHub Docs — Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub Docs — Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Docs — Securing Pages with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)