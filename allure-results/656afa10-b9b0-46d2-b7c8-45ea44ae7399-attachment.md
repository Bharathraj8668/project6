# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: windowhandling.spec.js >> windowHandling
- Location: tests\windowhandling.spec.js:2:5

# Error details

```
Error: page.click: Unexpected token "" while parsing css selector "". Did you mean to CSS.escape it?
Call log:
  - waiting for

```

# Page snapshot

```yaml
- generic [ref=f2e2]:
  - navigation "Shortcuts menu" [ref=f2e3]:
    - heading "Skip to" [level=2] [ref=f2e4]
    - list "Skip to" [ref=f2e5]:
      - listitem [ref=f2e6]:
        - link "main content" [ref=f2e7]:
          - /url: "#skippedLink"
          - text: Main content
    - separator [ref=f2e8]
  - banner [ref=f2e9]:
    - navigation "Primary" [ref=f2e10]:
      - generic [ref=f2e11]:
        - generic [ref=f2e12]:
          - link "Amazon.in" [ref=f2e14] [cursor=pointer]:
            - /url: /ref=nav_logo
            - generic: .in
          - button "Delivering to Chennai 600009 Update location" [ref=f2e17] [cursor=pointer]:
            - generic [ref=f2e19]:
              - generic [ref=f2e20]: Delivering to Chennai 600009
              - generic [ref=f2e21]: Update location
        - search [ref=f2e24]:
          - generic [ref=f2e27]:
            - generic [ref=f2e28]: All
            - combobox "Select the department you want to search in" [ref=f2e31] [cursor=pointer]:
              - option "All Categories" [selected]
              - option "Alexa Skills"
              - option "Amazon Devices"
              - option "Amazon Fashion"
              - option "Amazon Fresh"
              - option "Amazon Fresh Meat"
              - option "Amazon Pharmacy"
              - option "Appliances"
              - option "Apps & Games"
              - option "Audible Audiobooks"
              - option "Baby"
              - option "Beauty"
              - option "Books"
              - option "Car & Motorbike"
              - option "Clothing & Accessories"
              - option "Collectibles"
              - option "Computers & Accessories"
              - option "Deals"
              - option "Electronics"
              - option "Furniture"
              - option "Garden & Outdoors"
              - option "Gift Cards"
              - option "Grocery & Gourmet Foods"
              - option "Health & Personal Care"
              - option "Home & Kitchen"
              - option "Industrial & Scientific"
              - option "Jewellery"
              - option "Kindle Store"
              - option "Luggage & Bags"
              - option "Luxury Beauty"
              - option "Movies & TV Shows"
              - option "MP3 Music"
              - option "Music"
              - option "Musical Instruments"
              - option "Office Products"
              - option "Pet Supplies"
              - option "Prime Video"
              - option "Shoes & Handbags"
              - option "Software"
              - option "Sports, Fitness & Outdoors"
              - option "Subscribe & Save"
              - option "Tools & Home Improvement"
              - option "Toys & Games"
              - option "Under ₹500"
              - option "Video Games"
              - option "Watches"
          - searchbox "Search Amazon.in" [active] [ref=f2e34]: samsung s25 ultra 5g mobile
          - generic "Go" [ref=f2e37] [cursor=pointer]:
            - button "Go" [ref=f2e38]
        - generic [ref=f2e40]:
          - link "Choose a language for shopping in Amazon India. The current selection is English (EN)." [ref=f2e42] [cursor=pointer]:
            - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang
            - generic [ref=f2e45]:
              - img "India" [ref=f2e46]
              - generic [ref=f2e47]: EN
          - link "Hello, sign in Account & Lists" [ref=f2e49] [cursor=pointer]:
            - /url: https://www.amazon.in/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3F_encoding%3DUTF8%26ref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
            - generic [ref=f2e50]: Hello, sign in
            - generic [ref=f2e52]: Account & Lists
          - link "Returns & Orders" [ref=f2e53] [cursor=pointer]:
            - /url: /gp/css/order-history?ref_=nav_orders_first
            - generic [ref=f2e54]: Returns
            - generic [ref=f2e55]: "& Orders"
          - link "0 items in cart" [ref=f2e56] [cursor=pointer]:
            - /url: /gp/cart/view.html?ref_=nav_cart
            - generic [ref=f2e57]: "0"
            - generic [ref=f2e60]: Cart
      - generic [ref=f2e62]:
        - button "Open All Categories Menu" [ref=f2e64]:
          - generic [ref=f2e66]: All
        - list [ref=f2e70]:
          - listitem [ref=f2e71]:
            - link "Fresh" [ref=f2e73] [cursor=pointer]:
              - /url: /fresh?ref_=nav_cs_grocery
          - listitem [ref=f2e74]:
            - link "Prime Video" [ref=f2e76] [cursor=pointer]:
              - /url: https://www.primevideo.com/offers/nonprimehomepage/ref_=nav_dvm_crs_in_s_gw_bt_dk_p_hamburgr?ref_=avod_desktop_topnav
          - listitem [ref=f2e77]:
            - link "Sell" [ref=f2e79] [cursor=pointer]:
              - /url: /b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3
          - listitem [ref=f2e80]:
            - link "Bestsellers" [ref=f2e82] [cursor=pointer]:
              - /url: /gp/bestsellers/?ref_=nav_cs_bestsellers
          - listitem [ref=f2e83]:
            - link "Today's Deals" [ref=f2e85] [cursor=pointer]:
              - /url: /deals?ref_=nav_cs_gb
          - listitem [ref=f2e86]:
            - link "Customer Service" [ref=f2e88] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help
          - listitem [ref=f2e89]:
            - link "Mobiles" [ref=f2e91] [cursor=pointer]:
              - /url: /mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
          - listitem [ref=f2e92]:
            - link "New Releases" [ref=f2e94] [cursor=pointer]:
              - /url: /gp/new-releases/?ref_=nav_cs_newreleases
          - listitem [ref=f2e95]:
            - link "Prime" [ref=f2e97] [cursor=pointer]:
              - /url: /prime?ref_=nav_cs_primelink_nonmember
          - listitem [ref=f2e98]:
            - link "Amazon Pay" [ref=f2e100] [cursor=pointer]:
              - /url: /gp/sva/dashboard?ref_=nav_cs_apay
          - listitem [ref=f2e101]:
            - link "Electronics" [ref=f2e103] [cursor=pointer]:
              - /url: /electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics
          - listitem [ref=f2e104]:
            - link "Home & Kitchen" [ref=f2e106] [cursor=pointer]:
              - /url: /Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home
          - listitem [ref=f2e107]:
            - link "Fashion" [ref=f2e109] [cursor=pointer]:
              - /url: /gp/browse.html?node=6648217031&ref_=nav_cs_fashion
          - listitem [ref=f2e110]:
            - link "Computers" [ref=f2e112] [cursor=pointer]:
              - /url: /computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc
          - listitem [ref=f2e113]:
            - link "Toys & Games" [ref=f2e115] [cursor=pointer]:
              - /url: /Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys
          - listitem [ref=f2e116]:
            - link "Beauty & Personal Care" [ref=f2e118] [cursor=pointer]:
              - /url: /beauty/b/?ie=UTF8&node=1355016031&ref_=nav_cs_beauty
          - listitem [ref=f2e119]:
            - link "Car & Motorbike" [ref=f2e121] [cursor=pointer]:
              - /url: /Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive
          - listitem [ref=f2e122]:
            - link "Sports, Fitness & Outdoors" [ref=f2e124] [cursor=pointer]:
              - /url: /Sports/b/?ie=UTF8&node=1984443031&ref_=nav_cs_sports
          - listitem [ref=f2e125]:
            - link "Home Improvement" [ref=f2e127] [cursor=pointer]:
              - /url: /Home-Improvement/b/?ie=UTF8&node=4286640031&ref_=nav_cs_hi
          - listitem [ref=f2e128]:
            - link "Gift Cards" [ref=f2e130] [cursor=pointer]:
              - /url: /gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc
          - listitem [ref=f2e131]:
            - link "Video Games" [ref=f2e133] [cursor=pointer]:
              - /url: /video-games/b/?ie=UTF8&node=976460031&ref_=nav_cs_video_games
          - listitem [ref=f2e134]:
            - link "Grocery & Gourmet Foods" [ref=f2e136] [cursor=pointer]:
              - /url: /Gourmet-Specialty-Foods/b/?ie=UTF8&node=2454178031&ref_=nav_cs_grocery
          - listitem [ref=f2e137]:
            - link "Pet Supplies" [ref=f2e139] [cursor=pointer]:
              - /url: /Pet-Supplies/b/?ie=UTF8&node=2454181031&ref_=nav_cs_pets
          - listitem [ref=f2e140]:
            - link "Custom Products" [ref=f2e142] [cursor=pointer]:
              - /url: /Amazon-Custom/b/?ie=UTF8&node=32615889031&ref_=nav_cs_custom
          - listitem [ref=f2e143]:
            - link "Health, Household & Personal Care" [ref=f2e145] [cursor=pointer]:
              - /url: /health-and-personal-care/b/?ie=UTF8&node=1350384031&ref_=nav_cs_hpc
          - listitem [ref=f2e146]:
            - link "Baby" [ref=f2e148] [cursor=pointer]:
              - /url: /Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby
          - listitem [ref=f2e149]:
            - link "Audible" [ref=f2e151] [cursor=pointer]:
              - /url: /Audible-Books-and-Originals/b/?ie=UTF8&node=17941593031&ref_=nav_cs_audible
          - listitem [ref=f2e152]:
            - link "AmazonBasics" [ref=f2e154] [cursor=pointer]:
              - /url: /b/?node=6637738031&ref_=nav_cs_amazonbasics
          - listitem [ref=f2e155]:
            - link "Subscribe & Save" [ref=f2e157] [cursor=pointer]:
              - /url: /auto-deliveries/landing?ref_=nav_cs_sns
          - listitem [ref=f2e158]:
            - link "Kindle eBooks" [ref=f2e160] [cursor=pointer]:
              - /url: /Kindle-eBooks/b/?ie=UTF8&node=1634753031&ref_=nav_cs_kindle_books
          - listitem [ref=f2e161]:
            - link "Books" [ref=f2e163] [cursor=pointer]:
              - /url: /Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books
          - listitem [ref=f2e164]:
            - link "Flights" [ref=f2e166] [cursor=pointer]:
              - /url: /flights?ref_=nav_cs_apay_desktop_topnav_flights
        - link "AugART26_Event" [ref=f2e170]:
          - /url: /events/greatfreedomsale/?_encoding=UTF8&ref_=nav_swm_event&pf_rd_p=84b33765-98c5-4189-9140-5b49efeeb8df&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A21TJRUUN4KGV&pf_rd_r=631QDV65Y87PJEZT8Z1A
          - img "AugART26_Event" [ref=f2e171]
  - main [ref=f2e173]:
    - banner [ref=f2e175]:
      - region "Featured content" [ref=f2e176]:
        - list [ref=f2e181]:
          - listitem [ref=f2e182]:
            - link [ref=f2e185]:
              - /url: /events/greatfreedomsale/?_encoding=UTF8&ref_=AA26DO&pd_rd_w=jCRV3&content-id=amzn1.sym.05697980-aaa2-476a-b4e9-38d13854d988&pf_rd_p=05697980-aaa2-476a-b4e9-38d13854d988&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=gwWwy&pd_rd_r=24462017-9138-4375-b5fc-bc49bedf628e
              - img "Great freedom Sale" [ref=f2e186]
          - listitem [ref=f2e187]
          - listitem [ref=f2e189]
          - listitem [ref=f2e191]
          - listitem [ref=f2e193]
          - listitem [ref=f2e195]
          - listitem [ref=f2e197]
          - listitem [ref=f2e199]
    - generic [ref=f2e202]:
      - generic [ref=f2e204]:
        - heading "Smartphones curated for you" [level=2] [ref=f2e206]
        - generic [ref=f2e207]:
          - generic [ref=f2e208]:
            - link "Budget | Under ₹15,000" [ref=f2e210]:
              - /url: /s/?_encoding=UTF8&i=electronics&rh=n%3A1805560031&dc=&_encoding=UTF8&qid=1782817269&rnid=1318502031&ref=sr_nr_p_36_0_0&low-price=5000&high-price=15400&pd_rd_w=rukpZ&content-id=amzn1.sym.042d46f5-694e-468c-9cb3-67fb658627a2&pf_rd_p=042d46f5-694e-468c-9cb3-67fb658627a2&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069&ref_=pd_hp_d_atf_unk
              - img "Budget | Under ₹15,000" [ref=f2e212]
            - link "Mid-range | ₹15,000 - ₹25,000" [ref=f2e216]:
              - /url: /s/?_encoding=UTF8&i=electronics&rh=n%3A1805560031&dc=&_encoding=UTF8&qid=1782817273&rnid=1318502031&ref=sr_nr_p_36_0_0&low-price=15500&high-price=25900&pd_rd_w=rukpZ&content-id=amzn1.sym.042d46f5-694e-468c-9cb3-67fb658627a2&pf_rd_p=042d46f5-694e-468c-9cb3-67fb658627a2&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069&ref_=pd_hp_d_atf_unk
              - img "Mid-range | ₹15,000 - ₹25,000" [ref=f2e218]
          - generic [ref=f2e221]:
            - link "Premium | ₹25,000 - ₹45,000" [ref=f2e223]:
              - /url: /s/?_encoding=UTF8&i=electronics&rh=n%3A1805560031&dc=&_encoding=UTF8&qid=1782817276&rnid=1318502031&ref=sr_nr_p_36_0_0&low-price=24600&high-price=45100&pd_rd_w=rukpZ&content-id=amzn1.sym.042d46f5-694e-468c-9cb3-67fb658627a2&pf_rd_p=042d46f5-694e-468c-9cb3-67fb658627a2&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069&ref_=pd_hp_d_atf_unk
              - img "Premium | ₹25,000 - ₹45,000" [ref=f2e225]
            - link "Ultra Premium | Above ₹45,000" [ref=f2e229]:
              - /url: /s/?_encoding=UTF8&i=electronics&rh=n%3A1805560031&dc=&_encoding=UTF8&qid=1782817277&rnid=1318502031&ref=sr_nr_p_36_0_0&low-price=45100&high-price=&pd_rd_w=rukpZ&content-id=amzn1.sym.042d46f5-694e-468c-9cb3-67fb658627a2&pf_rd_p=042d46f5-694e-468c-9cb3-67fb658627a2&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069&ref_=pd_hp_d_atf_unk
              - img "Ultra Premium | Above ₹45,000" [ref=f2e231]
        - link "Smartphones curated for you - See all offers" [ref=f2e235]:
          - /url: /b/?_encoding=UTF8&node=1389401031&ref_=tile5_seeallCLP&pd_rd_w=rukpZ&content-id=amzn1.sym.042d46f5-694e-468c-9cb3-67fb658627a2&pf_rd_p=042d46f5-694e-468c-9cb3-67fb658627a2&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069
          - generic [ref=f2e236]: See all offers
      - generic [ref=f2e239]:
        - heading "Get Business Exclusive Cashback + GST credit" [level=2] [ref=f2e241]
        - generic [ref=f2e242]:
          - generic [ref=f2e243]:
            - link "Up to 50% off | Laptops" [ref=f2e245]:
              - /url: /b/ref=vpr_b2c_pcqc_reg/?_encoding=UTF8&ie=UTF8&node=80662860031&pd_rd_w=fuozf&content-id=amzn1.sym.d5ab6e0b-100e-4588-a4fc-84744f43f01e&pf_rd_p=d5ab6e0b-100e-4588-a4fc-84744f43f01e&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069&ref_=pd_hp_d_atf_unk
              - img "Up to 50% off | Laptops" [ref=f2e247]
            - link "GST ready invoice" [ref=f2e251]:
              - /url: /b/ref=vpr_b2c_pcqc_reg/?_encoding=UTF8&ie=UTF8&node=80662860031&pd_rd_w=fuozf&content-id=amzn1.sym.d5ab6e0b-100e-4588-a4fc-84744f43f01e&pf_rd_p=d5ab6e0b-100e-4588-a4fc-84744f43f01e&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069&ref_=pd_hp_d_atf_unk
              - img "GST ready invoice" [ref=f2e253]
              - generic [ref=f2e254]: GST ready invoice | Automotive
          - generic [ref=f2e256]:
            - link "smal appliances" [ref=f2e258]:
              - /url: /b/ref=vpr_b2c_pcqc_reg/?_encoding=UTF8&ie=UTF8&node=80662860031&pd_rd_w=fuozf&content-id=amzn1.sym.d5ab6e0b-100e-4588-a4fc-84744f43f01e&pf_rd_p=d5ab6e0b-100e-4588-a4fc-84744f43f01e&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069&ref_=pd_hp_d_atf_unk
              - img "smal appliances" [ref=f2e260]
              - generic [ref=f2e261]: Up to 60% off | Office products
            - link "for business purchases" [ref=f2e264]:
              - /url: /b/ref=vpr_b2c_pcqc_reg/?_encoding=UTF8&ie=UTF8&node=80662860031&pd_rd_w=fuozf&content-id=amzn1.sym.d5ab6e0b-100e-4588-a4fc-84744f43f01e&pf_rd_p=d5ab6e0b-100e-4588-a4fc-84744f43f01e&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069&ref_=pd_hp_d_atf_unk
              - img "for business purchases" [ref=f2e266]
              - generic [ref=f2e267]: For business purchases
        - link "Get Business Exclusive Cashback + GST credit - See all offers" [ref=f2e270]:
          - /url: /b/ref=vpr_b2c_pcqc_reg/?_encoding=UTF8&ie=UTF8&node=80662860031&pd_rd_w=fuozf&content-id=amzn1.sym.d5ab6e0b-100e-4588-a4fc-84744f43f01e&pf_rd_p=d5ab6e0b-100e-4588-a4fc-84744f43f01e&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069&ref_=pd_hp_d_atf_unk
          - generic [ref=f2e271]: See all offers
      - generic [ref=f2e274]:
        - heading "Up to 35% off | Echo with Alexa and Fire TV" [level=2] [ref=f2e276]
        - generic [ref=f2e277]:
          - generic [ref=f2e278]:
            - link "Echo Show 8" [ref=f2e280]:
              - /url: https://www.amazon.in/dp/B0DYBZF1LL/?_encoding=UTF8&pd_rd_w=GZCcZ&content-id=amzn1.sym.165549a5-c7ce-4401-b949-9bb8f46861c7&pf_rd_p=165549a5-c7ce-4401-b949-9bb8f46861c7&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069&ref_=pd_hp_d_atf_unk
              - img "Echo Show 8" [ref=f2e282]
            - link "Fire TV Stick HD" [ref=f2e286]:
              - /url: https://www.amazon.in/dp/B0DVJF7528/?_encoding=UTF8&pd_rd_w=GZCcZ&content-id=amzn1.sym.165549a5-c7ce-4401-b949-9bb8f46861c7&pf_rd_p=165549a5-c7ce-4401-b949-9bb8f46861c7&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069&ref_=pd_hp_d_atf_unk
              - img "Fire TV Stick HD" [ref=f2e288]
          - generic [ref=f2e291]:
            - link "Echo Dot Max" [ref=f2e293]:
              - /url: https://www.amazon.in/dp/B0DKLJ1PSF/?_encoding=UTF8&pd_rd_w=GZCcZ&content-id=amzn1.sym.165549a5-c7ce-4401-b949-9bb8f46861c7&pf_rd_p=165549a5-c7ce-4401-b949-9bb8f46861c7&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069&ref_=pd_hp_d_atf_unk
              - img "Echo Dot Max" [ref=f2e295]
            - link "Echo Dot (5th Gen)" [ref=f2e299]:
              - /url: https://www.amazon.in/dp/B09B8XJDW5/?_encoding=UTF8&pd_rd_w=GZCcZ&content-id=amzn1.sym.165549a5-c7ce-4401-b949-9bb8f46861c7&pf_rd_p=165549a5-c7ce-4401-b949-9bb8f46861c7&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069&ref_=pd_hp_d_atf_unk
              - img "Echo Dot (5th Gen)" [ref=f2e301]
        - link "Up to 35% off | Echo with Alexa and Fire TV - See all deals" [ref=f2e305]:
          - /url: /l/21501032031/?_encoding=UTF8&pd_rd_w=GZCcZ&content-id=amzn1.sym.165549a5-c7ce-4401-b949-9bb8f46861c7&pf_rd_p=165549a5-c7ce-4401-b949-9bb8f46861c7&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069&ref_=pd_hp_d_atf_unk
          - generic [ref=f2e306]: See all deals
      - generic [ref=f2e309]:
        - heading "Shop by brand | Deals on top smartphones" [level=2] [ref=f2e311]
        - generic [ref=f2e312]:
          - generic [ref=f2e313]:
            - link "Samsung Galaxy | Savings up to ₹40,000" [ref=f2e315]:
              - /url: /b/?_encoding=UTF8&node=26850977031&pd_rd_w=6j1OT&content-id=amzn1.sym.5bb9846f-f7e7-49c4-a376-099dbe75305c&pf_rd_p=5bb9846f-f7e7-49c4-a376-099dbe75305c&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069&ref_=pd_hp_d_atf_unk
              - img "Samsung Galaxy | Savings up to ₹40,000" [ref=f2e317]
            - link "OnePlus | Savings up to ₹11,000" [ref=f2e321]:
              - /url: /b/?_encoding=UTF8&node=78382731031&pd_rd_w=6j1OT&content-id=amzn1.sym.5bb9846f-f7e7-49c4-a376-099dbe75305c&pf_rd_p=5bb9846f-f7e7-49c4-a376-099dbe75305c&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069&ref_=pd_hp_d_atf_unk
              - img "OnePlus | Savings up to ₹11,000" [ref=f2e323]
          - generic [ref=f2e326]:
            - link "iQOO | Starting ₹15,999*" [ref=f2e328]:
              - /url: /b/?_encoding=UTF8&node=94070968031&pd_rd_w=6j1OT&content-id=amzn1.sym.5bb9846f-f7e7-49c4-a376-099dbe75305c&pf_rd_p=5bb9846f-f7e7-49c4-a376-099dbe75305c&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069&ref_=pd_hp_d_atf_unk
              - img "iQOO | Starting ₹15,999*" [ref=f2e330]
            - link "Redmi | Starting ₹12,499*" [ref=f2e334]:
              - /url: /b/?_encoding=UTF8&node=78420299031&pd_rd_w=6j1OT&content-id=amzn1.sym.5bb9846f-f7e7-49c4-a376-099dbe75305c&pf_rd_p=5bb9846f-f7e7-49c4-a376-099dbe75305c&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069&ref_=pd_hp_d_atf_unk
              - img "Redmi | Starting ₹12,499*" [ref=f2e336]
        - link "Shop by brand | Deals on top smartphones - See all offers" [ref=f2e340]:
          - /url: /b/?_encoding=UTF8&node=1389401031&ref_=tile5_seeallCLP&pd_rd_w=6j1OT&content-id=amzn1.sym.5bb9846f-f7e7-49c4-a376-099dbe75305c&pf_rd_p=5bb9846f-f7e7-49c4-a376-099dbe75305c&pf_rd_r=631QDV65Y87PJEZT8Z1A&pd_rd_wg=5ssYP&pd_rd_r=89b9219c-fc24-483c-9ea0-2aa365983069
          - generic [ref=f2e341]: See all offers
```

# Test source

```ts
  1  | import { test } from '@playwright/test'
  2  | test('windowHandling', async ({ browser }) => {
  3  |   const context = await browser.newContext()
  4  |   const page = await context.newPage()
  5  |   await page.goto('https://www.amazon.in/')
  6  |   await page.locator('input[id="twotabsearchtextbox"]').fill('samsung s25 ultra 5g mobile')
  7  |   await page.keyboard.press('Enter')
  8  |   const [newPage] = await Promise.all([
  9  |     context.waitForEvent('page'),
> 10 |     page.click('')
     |          ^ Error: page.click: Unexpected token "" while parsing css selector "". Did you mean to CSS.escape it?
  11 |   ])
  12 |   await newPage.waitForLoadState()
  13 |   const title = await newPage.title()
  14 |   console.log(title)
  15 | })
```