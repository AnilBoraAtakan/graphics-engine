# Buffer Social Posting Guide

This guide explains how to use Buffer to schedule posts across social media channels and how to disconnect, reconnect, or replace connected accounts such as LinkedIn Pages, Instagram accounts, and X accounts.

## What Buffer is used for

Buffer is the main scheduler for social posts. Use it when you want to create one post, add media, choose multiple social channels, and schedule the post ahead of time.

Typical workflow:

1. Create the post in Buffer.
2. Add the caption and media.
3. Select the channels to publish to, for example LinkedIn, Instagram, and X.
4. Customize the caption per platform if needed.
5. Schedule the post or add it to the queue.
6. Confirm the post appears in each selected channel queue.

Discord announcements are handled separately through Zapier.

## Important concepts

### Channel

In Buffer, each connected social account is a channel. For example:

- One LinkedIn Page is one channel.
- One Instagram account is one channel.
- One X account is one channel.

If you connect LinkedIn, Instagram, and X, that counts as three channels.

## Connecting a new channel

Use this when adding a new social account to Buffer.

1. Log in to the correct social account in another browser tab first.
   - For LinkedIn Pages, log in to the LinkedIn profile that has Super Admin access for the Page.
   - For Instagram, log in to the correct Instagram account or the Facebook profile that manages the linked Facebook Page, depending on the connection method.
   - For X, log in to the correct X account.
2. In Buffer, open **Channels**.
3. Click **Connect New Channel**.
4. Choose the platform, for example LinkedIn, Instagram, or X.
5. Authorize Buffer when redirected to the social platform.
6. Return to Buffer and confirm the new channel appears in the channel list.
7. Create a small test post or draft to confirm the connection works.

## Disconnecting a channel

Use this only when you are sure the channel should be removed or replaced.

Warning: disconnecting a channel can remove existing posts, comments, analytics, and data for that channel in Buffer. This cannot be recovered.

Steps:

1. Open Buffer.
2. Go to **Channels**.
3. Find the channel you want to remove.
4. Click the three-dot menu next to that channel.
5. Click **Disconnect Channel**.
6. Confirm the warning. Buffer may ask you to type `disconnect`.
7. Confirm that the channel no longer appears in Buffer.

## Refreshing a channel connection

Use refresh when the same channel should stay connected, but Buffer has lost authorization.

Common reasons to refresh:

- LinkedIn token expired.
- Instagram or Facebook authorization expired.
- Account password changed.
- Admin access changed.
- Buffer says the channel is unavailable or disconnected.
- Scheduled posts fail because of authorization.

Steps:

1. Open Buffer.
2. Go to **Channels**.
3. Look for a channel with a refresh prompt.
4. Click **Refresh**.
5. Log in to the correct social account when prompted.
6. Accept the requested permissions.
7. Return to Buffer.
8. Retry failed posts manually if needed.

Refreshing does not delete scheduled posts. It only reauthorizes Buffer to publish to that channel.

## Changing the connected LinkedIn account

There are two different cases. Pick the one that matches what you are trying to do.

### Case A: Same LinkedIn Page, different person should manage the connection

Use this when the LinkedIn Page is the same, but the person who authorizes Buffer should change.

Recommended approach:

1. Make sure the new person has **Super Admin** access on the LinkedIn Page.
2. Ask the new person to log in to their LinkedIn account in another browser tab.
3. In Buffer, go to **Channels**.
4. Try **Refresh** on the LinkedIn Page channel.
5. Complete LinkedIn authorization using the new person's LinkedIn account.
6. Confirm Buffer still shows the correct LinkedIn Page.
7. Create a test draft or scheduled test post.

If refreshing does not switch the authorized LinkedIn user, use the full replacement flow below.

### Case B: Replace the LinkedIn Page channel entirely

Use this when the old LinkedIn Page should be removed and a different LinkedIn Page should be connected.

1. Save or screenshot anything important from the old LinkedIn channel queue.
2. Move or recreate scheduled posts that should not be lost.
3. Disconnect the old LinkedIn channel from Buffer.
4. Log in to the LinkedIn profile that has Super Admin access for the new LinkedIn Page.
5. In Buffer, go to **Channels**.
6. Click **Connect New Channel**.
7. Select **LinkedIn**.
8. Choose the correct LinkedIn Page.
9. Authorize Buffer.
10. Confirm the new LinkedIn Page appears in Buffer.
11. Schedule a small test post or create a draft to confirm setup.

## LinkedIn-specific notes

- To connect a LinkedIn Page to Buffer, the LinkedIn profile used for authorization must have Super Admin access for that Page.
- LinkedIn access tokens may need refreshing around every 60 days.
- If a LinkedIn Page does not appear during connection, check that you are logged in to the correct LinkedIn profile and that the profile has Super Admin access.
- LinkedIn Groups are not available through third-party API publishing in Buffer.
- The admin who connects the LinkedIn Page may be visible inside Buffer's internal attribution, but followers should not see that attribution on the public post.

## Instagram-specific notes

- Instagram Business and Creator accounts are the best fit for Buffer publishing.
- Instagram Personal accounts may have limitations and may use notification publishing instead of full auto-publishing.
- If Instagram is connected through a linked Facebook Page, the Facebook profile used for authorization must have the right admin access.
- If Instagram publishing fails, refresh the Instagram channel before disconnecting it.

## X-specific notes

- Confirm the correct X account is logged in before connecting it to Buffer.
- If the wrong X account is connected, disconnect it from Buffer and reconnect while logged into the correct X account.
- Avoid publishing identical posts to many accounts at exactly the same time, because social platforms may flag duplicate behavior.

## Zapier and Discord announcement setup

Use Zapier only for Discord announcements, not as the main place to schedule social posts.

Recommended automation:

1. Buffer publishes a post.
2. Zapier detects a **New Sent Item** from one selected Buffer channel.
3. Zapier sends a Discord message to the announcement channel.

Avoid duplicate Discord messages by triggering the Zap from only one Buffer channel, usually Instagram or LinkedIn. Buffer's **New Sent Item** trigger is per specific channel, so a campaign posted to three platforms can otherwise create three Discord messages.

## Troubleshooting

### The wrong LinkedIn Page appears

1. Log out of LinkedIn in your browser.
2. Log in to the LinkedIn profile that has Super Admin access for the correct Page.
3. Go back to Buffer and connect or refresh the channel again.

### The LinkedIn Page does not appear

Check:

- The LinkedIn profile has Super Admin access.
- You are logged into the right LinkedIn profile in the same browser.
- The Page is not already connected to another Buffer organization.

### Scheduled posts fail

1. Open Buffer.
2. Go to **Channels**.
3. Refresh the affected channel.
4. Retry failed posts manually.

### Instagram does not auto-publish

Check:

- The account is an Instagram Business or Creator account.
- The Instagram account is connected correctly.
- Required Facebook Page permissions are still valid if Instagram is connected through Facebook.
- The post type and media meet Instagram publishing requirements.

### Discord gets multiple announcements for one campaign

The Zap is probably triggering from multiple Buffer channels.

Fix:

- Configure the Buffer trigger for only one specific channel.
- Or add a Zapier filter so the Discord step only continues for one platform, for example Instagram.

## Official documentation

- Buffer, connecting channels: https://support.buffer.com/article/564-connecting-your-channels-to-buffer
- Buffer, disconnecting a channel: https://support.buffer.com/article/575-removing-a-channel-from-buffer
- Buffer, refreshing a channel: https://support.buffer.com/article/573-refreshing-a-channel-in-buffer
- Buffer, using LinkedIn with Buffer: https://support.buffer.com/article/560-using-linkedin-with-buffer
- Buffer, scheduling posts: https://support.buffer.com/article/642-scheduling-posts
- Buffer, using Zapier with Buffer: https://support.buffer.com/article/814-buffer-api-support-zapier-pinterest-and-whats-possible-for-users
