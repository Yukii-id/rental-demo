# Deploy Guide - Rental Demo Showcase

- **App Name:** `rental-demo`
- **Domain:** `https://rental.deovatta.my.id`
- **Port:** `3080`
- **Working Directory:** `/home/devata-vps/deovatta/projects/rental-demo`

## Step-by-Step Deploy
1. **Dependencies:**
   ```bash
   cd /home/devata-vps/deovatta/projects/rental-demo
   npm install
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Start / Restart with PM2:**
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   ```

4. **Cloudflare Tunnel Routing:**
   - Ingress `rental.deovatta.my.id` -> `http://localhost:3080` (Tunnel ID: `f6a500c3-802e-49d4-9ad5-f2f20d01a688`)
   - CNAME `rental.deovatta.my.id` -> `f6a500c3-802e-49d4-9ad5-f2f20d01a688.cfargotunnel.com`
