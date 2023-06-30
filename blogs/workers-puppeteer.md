---
title: CloudFlare workers puppeteerを使ってみた
description: CloudFlare workersでブラウザを自動化することが可能なものを使ってみた。(まだベータ版)
date: 2023/6/30 12:00
---

CloudFlare puppeteerがベータ版としてリリースされたので、使ってみようと思います。

## 申し込み方法
公式Discordサーバーから申し込んだ方が早いので、そこに入室後CloudflareのアカウントIDを貼り付けて、使いたいと英語で送信してくれれば、使えるようになります。

[CloudFlare公式サーバー](https://discord.gg/cloudflaredev)

## サンプルコード
```ts
import puppeteer from "@cloudflare/puppeteer";

export default {
    async fetch(request: Request, env: Env): Promise<Response> {


		    const { searchParams } = new URL(request.url);
		    let url = searchParams.get('url');
		    if (!url) {
			      return new Response("Invalid url");
		    };
		    const page = await browser.newPage();
	      await page.setViewport({
	          width: 1920,
	          height: 1080,
	          deviceScaleFactor: 1,
	      });
        await page.goto(url, {
	          waitUntil: "networkidle2",
	      });
        const screenshot = await page.screenshot() as Buffer;
	      await browser.close();
        return new Response(screenshot.buffer, {
            headers: {
                "content-type": "image/png"
            }
        });
    },
};
```
