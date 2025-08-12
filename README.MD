##Step 4:
- Login info for gloria.html:
    - gloria:popuppass


##Step 5:
- Before enabling compression with `mod_deflate`, the document took about **90,000 ms** or more to load itself. After enabling compression with `mod_deflate`, the load time took **less than 80,000 ms** to load itself. This shows that `mod_deflate` significantly helped reduce the load time of the document by compressing the files, resulting in faster page rendering.

##Step 6:
- After some research, I installed Apache's `mod_security` module, edited Apache's configuration to add my custom server name, and then retrieved the desired header.