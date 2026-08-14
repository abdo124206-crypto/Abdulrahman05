const menu = [
  {id:"kofta", ar:"كفتة", en:"Kofta", price:25, cat:"grill", img:"kofta.jpg"},
  {id:"shish", ar:"شيش طاووق", en:"Shish Taouk", price:28, cat:"grill", img:"shish-taouk.jpg"},
  {id:"kebab", ar:"كباب", en:"Kebab", price:30, cat:"grill", img:"kofta.jpg"},
  {id:"mutton", ar:"ريش غنم", en:"Mutton Chop", price:30, cat:"grill", img:"mutton-chop.jpg"},
  {id:"mix", ar:"مشوي مشكل عادي", en:"Regular Mix Grill", price:30, cat:"grill", img:"shish-taouk.jpg"},
  {id:"mixplus", ar:"مشوي مشكل مع ريش ٢ قطعة", en:"Mix Grill + 2 Mutton Chops", price:35, cat:"grill", img:"mutton-chop.jpg"},
  {id:"boneless", ar:"١/٢ مسحب", en:"Half Boneless Chicken", price:30, cat:"grill", img:"grilled-wings.jpg"},
  {id:"machine-half", ar:"١/٢ دجاج مكنة", en:"Half Chicken Machine", price:16, cat:"grill", img:"tajin-chicken.jpg"},
  {id:"machine-quarter", ar:"١/٤ دجاج مكنة", en:"Quarter Chicken Machine", price:10, cat:"grill", img:"tajin-chicken.jpg"},
  {id:"wings", ar:"جوانح مشوية", en:"Grilled Wings", price:20, cat:"grill", img:"grilled-wings.jpg"},
  {id:"tarab", ar:"طراب", en:"Tarab", price:30, cat:"grill", img:"mutton-chop.jpg"},
  {id:"kofta-kilo", ar:"كفتة ١ كيلو", en:"Kofta 1 Kilo", price:90, cat:"grill", img:"kofta.jpg"},
  {id:"taouk-kilo", ar:"طاووق ١ كيلو", en:"Taouk 1 Kilo", price:95, cat:"grill", img:"shish-taouk.jpg"},
  {id:"mutton-kilo", ar:"ريش ١ كيلو", en:"Mutton Chop 1 Kilo", price:120, cat:"grill", img:"mutton-chop.jpg"},
  {id:"kebab-kilo", ar:"كباب ١ كيلو", en:"Kebab 1 Kilo", price:100, cat:"grill", img:"kofta.jpg"},
  {id:"mix-kilo", ar:"مشوي مشكل ١ كيلو", en:"Mix Grill 1 Kilo", price:100, cat:"grill", img:"shish-taouk.jpg"},
  {id:"mix-mutton-kilo", ar:"مشوي مشكل مع ريش ١ كيلو", en:"Mix Grill With Mutton Chop 1 Kilo", price:120, cat:"grill", img:"mutton-chop.jpg"},
  {id:"tarab-kilo", ar:"طراب ١ كيلو", en:"Tarab 1 Kilo", price:100, cat:"grill", img:"grilled-wings.jpg"},

  {id:"molokhia", ar:"ملوخية بالفراخ", en:"Molokhia With Chicken", price:22, cat:"tajin", img:"molokhia.jpg"},
  {id:"molokhia-meat", ar:"ملوخية باللحمة", en:"Molokhia With Meat", price:25, cat:"tajin", img:"molokhia.jpg"},
  {id:"okra", ar:"بامية باللحمة", en:"Okra With Meat", price:25, cat:"tajin", img:"tajin-chicken.jpg"},
  {id:"pigeon-potato", ar:"طاجن حمام بالبطاطس", en:"Pigeon With Potatoes", price:80, cat:"tajin", img:"fatteh.jpg"},
  {id:"beans-meat", ar:"فاصوليا باللحمة", en:"White Beans With Meat", price:25, cat:"tajin", img:"tajin-chicken.jpg"},
  {id:"tajin-neva", ar:"طاجن نيفا", en:"Tajin Neva", price:30, cat:"tajin", img:"tajin-chicken.jpg"},
  {id:"tajin-rice", ar:"جميع الطواجن مع أرز وشوربة", en:"All Tajin Served With Rice & Soup", price:0, cat:"tajin", img:"tajin-chicken.jpg"},
  {id:"boiled-chicken", ar:"دجاج مسلوق مع لسان عصفور", en:"Boiled Chicken With Soup", price:14, cat:"tajin", img:"tajin-chicken.jpg"},
  {id:"boiled-meat", ar:"لحم مسلوق مع لسان عصفور", en:"Boiled Meat With Soup", price:15, cat:"tajin", img:"mutton-chop.jpg"},

  {id:"lamb-fatteh", ar:"فتة موزة", en:"Lamb Fatteh", price:32, cat:"main", img:"fatteh.jpg"},
  {id:"mansaf", ar:"منسف أردني", en:"Jordanian Mansaf", price:45, cat:"main", img:"fatteh.jpg"},
  {id:"chicken-biryani", ar:"برياني دجاج", en:"Chicken Biryani", price:20, cat:"main", img:"biryani.jpg"},
  {id:"mutton-biryani", ar:"برياني لحم", en:"Mutton Biryani", price:25, cat:"main", img:"biryani.jpg"},
  {id:"mix-stuffed", ar:"محاشي مشكل", en:"Mix Stuffed", price:20, cat:"main", img:"vine-leaves.jpg"},
  {id:"oven-chicken", ar:"دجاج في الفرن", en:"Oven Baked Chicken", price:22, cat:"main", img:"fatteh.jpg"},
  {id:"fattoush-chicken", ar:"مكرونة فتوشي دجاج", en:"Fattoush Chicken", price:20, cat:"main", img:"salad.jpg"},
  {id:"pasta", ar:"مكرونة بشاميل لحم", en:"Pasta With Meat & Bechamel", price:15, cat:"main", img:"biryani.jpg"},
  {id:"bolognese", ar:"سباجيتي بولونيز", en:"Spaghetti Bolognese", price:15, cat:"main", img:"biryani.jpg"},

  {id:"fool-isk", ar:"فول اسكندراني", en:"Fool Iskandrani", price:12, cat:"breakfast", img:"falafel.jpg"},
  {id:"fool-tahini", ar:"فول بالطحينة", en:"Fool With Tahini", price:12, cat:"breakfast", img:"falafel.jpg"},
  {id:"falafel", ar:"فلافل ٦ حبة", en:"6 Pieces Falafel", price:10, cat:"breakfast", img:"falafel.jpg"},
  {id:"liver-breakfast", ar:"كبدة اسكندراني", en:"Iskandrani Liver", price:15, cat:"breakfast", img:"liver.jpg"},
  {id:"liver-cheese", ar:"كبدة جبن", en:"Liver Cheese", price:18, cat:"breakfast", img:"liver.jpg"},
  {id:"veg-omelet", ar:"أومليت بالخضار", en:"Vegetable Omelet", price:10, cat:"breakfast", img:"falafel.jpg"},
  {id:"cheese-omelet", ar:"أومليت جبن", en:"Cheese Omelet", price:12, cat:"breakfast", img:"falafel.jpg"},
  {id:"shakshuka", ar:"شكشوكة", en:"Shakshuka", price:10, cat:"breakfast", img:"liver.jpg"},

  {id:"lentil", ar:"شوربة عدس", en:"Lentil Soup", price:6, cat:"soups", img:"soup.jpg"},
  {id:"chicken-soup", ar:"شوربة دجاج كريمه", en:"Cream Of Chicken Soup", price:8, cat:"soups", img:"soup.jpg"},
  {id:"veg-soup", ar:"شوربة خضار", en:"Vegetable Soup", price:5, cat:"soups", img:"soup.jpg"},
  {id:"orzo", ar:"شوربة لسان عصفور", en:"Orzo Soup", price:5, cat:"soups", img:"soup.jpg"},

  {id:"hummus", ar:"حمص", en:"Hummus", price:10, cat:"appetizers", img:"vine-leaves.jpg"},
  {id:"olive", ar:"سلطة زيتون", en:"Olive Salad", price:8, cat:"appetizers", img:"salad.jpg"},
  {id:"cucumber-yogurt", ar:"روب خيار", en:"Cucumber With Yogurt", price:6, cat:"appetizers", img:"vine-leaves.jpg"},
  {id:"rocket", ar:"سلطة جرجير", en:"Rocket Salad", price:12, cat:"appetizers", img:"salad.jpg"},
  {id:"mutabbal", ar:"متبل", en:"Mutabbal", price:10, cat:"appetizers", img:"vine-leaves.jpg"},
  {id:"yogurt", ar:"لبنة", en:"Condensed Yoghurt", price:10, cat:"appetizers", img:"vine-leaves.jpg"},
  {id:"cold-vine", ar:"ورق عنب بارد", en:"Vine Leaves Cold", price:10, cat:"appetizers", img:"vine-leaves.jpg"},
  {id:"green-salad", ar:"سلطة خضراء", en:"Green Salad", price:8, cat:"appetizers", img:"salad.jpg"},
  {id:"fattoush", ar:"فتوش", en:"Fattoush", price:10, cat:"appetizers", img:"salad.jpg"},
  {id:"plate-large", ar:"صحن مقبلات كبير", en:"Appetizer Plate Large", price:45, cat:"appetizers", img:"salad.jpg"},
  {id:"plate-small", ar:"صحن مقبلات صغير", en:"Appetizer Plate Small", price:20, cat:"appetizers", img:"salad.jpg"},

  {id:"cheese-samosa", ar:"سمبوسة جبن", en:"Cheese Samosa", price:10, cat:"hot", img:"hot-appetizers.jpg"},
  {id:"meat-hummus", ar:"حمص لحم", en:"Meat With Hummus", price:15, cat:"hot", img:"hot-appetizers.jpg"},
  {id:"spicy-potato", ar:"بطاطا حارة", en:"Spicy Potatoes", price:10, cat:"hot", img:"hot-appetizers.jpg"},
  {id:"fried-kebab", ar:"كبة مقلية ٥ حبة", en:"Fried Kebab 5 Pieces", price:12, cat:"hot", img:"hot-appetizers.jpg"},
  {id:"chicken-liver-hot", ar:"كبدة دجاج", en:"Chicken Liver", price:12, cat:"hot", img:"hot-appetizers.jpg"},
  {id:"fried-potato", ar:"بطاطا مقلية", en:"Fried Potatoes", price:6, cat:"hot", img:"hot-appetizers.jpg"},
  {id:"sausage", ar:"سجق", en:"Sausage", price:15, cat:"hot", img:"hot-appetizers.jpg"},
  {id:"spicy-chicken", ar:"الدجاج الحار", en:"Spicy Chicken", price:12, cat:"hot", img:"hot-appetizers.jpg"},
  {id:"rice", ar:"طلب أرز", en:"Rice", price:6, cat:"hot", img:"biryani.jpg"},

  {id:"shawarma-small", ar:"شاورما دجاج صغير", en:"Chicken Shawarma Small", price:7, cat:"sandwiches", img:"shawarma.jpg"},
  {id:"shawarma-large", ar:"شاورما دجاج كبير", en:"Chicken Shawarma Large", price:12, cat:"sandwiches", img:"shawarma.jpg"},
  {id:"falafel-sandwich", ar:"ساندوتش فلافل", en:"Falafel Sandwich", price:4, cat:"sandwiches", img:"shawarma.jpg"},
  {id:"kofta-sandwich", ar:"ساندوتش كفتة", en:"Kofta Sandwich", price:12, cat:"sandwiches", img:"kofta.jpg"},
  {id:"spicy-chicken-sandwich", ar:"ساندوتش الدجاج مكسيكي الحار", en:"Spicy Mexican Chicken", price:12, cat:"sandwiches", img:"shawarma.jpg"},
  {id:"liver-sandwich", ar:"ساندوتش كبدة", en:"Liver Sandwich", price:12, cat:"sandwiches", img:"liver.jpg"},
  {id:"shawarma-plate", ar:"صحن شاورما دجاج", en:"Chicken Shawarma Plate", price:28, cat:"sandwiches", img:"shawarma-platter.jpg"},
  {id:"burger", ar:"ساندوتش برجر لحم", en:"Hamburger Beef", price:15, cat:"sandwiches", img:"burger.jpg"},
  {id:"loly", ar:"ساندوتش لولي بوب", en:"Loly Pop", price:12, cat:"sandwiches", img:"shawarma.jpg"},
  {id:"rubian", ar:"ساندوتش روبيان", en:"Rubian", price:10, cat:"sandwiches", img:"shawarma.jpg"},
  {id:"hawawshi", ar:"حواوشي", en:"Hawawshi", price:12, cat:"sandwiches", img:"shawarma.jpg"},

  {id:"rice-milk", ar:"أرز باللبن", en:"Rice With Milk", price:5, cat:"dessert", img:"rice-milk.jpg"},
  {id:"cream-caramel", ar:"كريم كراميل", en:"Cream Caramel", price:8, cat:"dessert", img:"cream-caramel.jpg"},
  {id:"pudding", ar:"مهلبية", en:"Pudding", price:5, cat:"dessert", img:"rice-milk.jpg"},
  {id:"om-ali", ar:"أم علي", en:"Om Ali", price:12, cat:"dessert", img:"cream-caramel.jpg"},
  {id:"kunafa", ar:"كنافة بالجبن", en:"Knafeh With Cheese", price:14, cat:"dessert", img:"cream-caramel.jpg"},

  {id:"soft-drink", ar:"مشروبات غازية", en:"Soft Drink", price:3, cat:"drinks", img:"mango-juice.jpg"},
  {id:"water", ar:"مياه معدنية", en:"Mineral Water", price:2, cat:"drinks", img:"mango-juice.jpg"},
  {id:"tea", ar:"شاي", en:"Tea", price:2, cat:"drinks", img:"coffee.jpg"},
  {id:"coffee", ar:"قهوة", en:"Coffee", price:6, cat:"drinks", img:"coffee.jpg"},
  {id:"mango", ar:"عصير مانجو", en:"Mango Juice", price:12, cat:"drinks", img:"mango-juice.jpg"},
  {id:"orange", ar:"عصير برتقال", en:"Orange Juice", price:12, cat:"drinks", img:"mango-juice.jpg"},
  {id:"mint-lemon", ar:"عصير ليمون نعناع", en:"Mint Lemon Juice", price:10, cat:"drinks", img:"mango-juice.jpg"},

  {id:"grape-leaves-lamb", ar:"خروف محشي ورق عنب", en:"Lamb Stuffed With Grape Leaves", price:0, cat:"special", img:"special.jpg"},
  {id:"half-lamb", ar:"١/٢ خروف محشي ورق عنب", en:"Half Lamb Stuffed With Grape Leaves", price:0, cat:"special", img:"special.jpg"},
  {id:"quarter-lamb", ar:"١/٤ فخذة خروف", en:"Quarter Lamb Thigh", price:0, cat:"special", img:"special.jpg"},
  {id:"roast-chicken", ar:"طبق دجاج محشي برياني أو مكبوس يكفي ٦ أشخاص", en:"Roasted Chicken With Rice For 6", price:150, cat:"special", img:"special.jpg"},
  {id:"biryani-chicken-6", ar:"طبق دجاج برياني أو مكبوس أو جريتر يكفي ٦ أشخاص", en:"Biryani Chicken For 6", price:150, cat:"special", img:"special.jpg"},
  {id:"turkey-6", ar:"طبق ديك رومي يكفي ٦ أشخاص", en:"Turkey For Six Persons", price:150, cat:"special", img:"special.jpg"},
  {id:"grilled-chicken", ar:"دبك رومي مشوي يكفي ٦ أشخاص", en:"Grilled Chicken For 6", price:250, cat:"special", img:"special.jpg"},
  {id:"mansaf-6", ar:"صينية منسف أردني تكفي ٦ أشخاص", en:"Jordanian Mansaf For 6", price:270, cat:"special", img:"special.jpg"},
  {id:"grilled-pigeon-2", ar:"حمام مشوي ٢ حبة", en:"Grilled Pigeon 2", price:82, cat:"special", img:"grilled-pigeon.jpg"},
  {id:"rice-pigeon", ar:"حمام محشي أرز ٢ حبة", en:"Rice Stuffed Pigeon", price:90, cat:"special", img:"rice-stuffed-pigeon.jpg"}
];

const cats = [
  {id:"all", ar:"الكل"},
  {id:"grill", ar:"المشويات"},
  {id:"tajin", ar:"الطواجن"},
  {id:"main", ar:"الأطباق الرئيسية"},
  {id:"breakfast", ar:"الفطار"},
  {id:"soups", ar:"الشوربة"},
  {id:"appetizers", ar:"المقبلات"},
  {id:"hot", ar:"مقبلات حارة"},
  {id:"sandwiches", ar:"السندويتشات"},
  {id:"dessert", ar:"الحلو"},
  {id:"drinks", ar:"المشروبات"},
  {id:"special", ar:"اختيارات خاصة"}
];




let activeCat = "all";
let search = "";
let cart = JSON.parse(localStorage.getItem("alPrinceCart") || "[]");
let currentUser = null;
let lastOrderUnsub = null;

const $ = (s) => document.querySelector(s);
const menuGrid = $("#menuGrid");
const menuTabs = $("#menuTabs");
const categoryScroller = $("#categoryScroller");

function money(n){ return n ? `${n} ج` : "حسب الاختيار"; }
function imgPath(item){ return `assets/images/${item.img}`; }
function esc(v=""){return String(v).replace(/[&<>\"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}

function renderCategories(){
  const html = cats.map(c => `<button class="category-pill ${activeCat===c.id?"active":""}" data-cat="${c.id}">${c.ar}</button>`).join("");
  categoryScroller.innerHTML = html;
  menuTabs.innerHTML = cats.map(c => `<button class="tab ${activeCat===c.id?"active":""}" data-cat="${c.id}">${c.ar}</button>`).join("");
}
function getFiltered(){
  const q = search.trim().toLowerCase();
  return menu.filter(item => {
    const catOk = activeCat === "all" || item.cat === activeCat;
    const qOk = !q || item.ar.toLowerCase().includes(q) || item.en.toLowerCase().includes(q);
    return catOk && qOk;
  });
}
function renderMenu(){
  const items = getFiltered();
  menuGrid.innerHTML = items.map(item => `<article class="menu-card">
    <div class="menu-card-image"><img src="${imgPath(item)}" alt="${esc(item.ar)}" loading="lazy" /></div>
    <div class="menu-card-body"><div class="menu-card-top"><div><h3>${esc(item.ar)}</h3><div class="en">${esc(item.en)}</div></div><div class="price">${money(item.price)}</div></div>
    <div class="menu-card-bottom"><span></span><button class="add-btn" type="button" data-add="${item.id}">+</button></div></div></article>`).join("");
  $("#emptyState").hidden = items.length !== 0;
}
function saveCart(){localStorage.setItem("alPrinceCart",JSON.stringify(cart));}
function addToCart(id){const item=menu.find(x=>x.id===id);if(!item)return;const ex=cart.find(x=>x.id===id);if(ex)ex.qty++;else cart.push({id,qty:1});saveCart();renderCart();toast(`اتضافت ${item.ar} للسلة`);}
function changeQty(id,delta){const item=cart.find(x=>x.id===id);if(!item)return;item.qty+=delta;if(item.qty<=0)cart=cart.filter(x=>x.id!==id);saveCart();renderCart();}
function cartTotal(){return cart.reduce((sum,row)=>{const item=menu.find(x=>x.id===row.id);return sum+((item?.price||0)*row.qty)},0)}
function renderCart(){
  const count=cart.reduce((s,r)=>s+r.qty,0);$("#cartCount").textContent=count;const has=cart.length>0;$("#cartEmpty").hidden=has;$(".cart-footer").hidden=!has;
  $("#cartItems").innerHTML=cart.map(row=>{const item=menu.find(x=>x.id===row.id);if(!item)return"";return `<div class="cart-item"><img src="${imgPath(item)}" alt="${esc(item.ar)}"><div><h4>${esc(item.ar)}</h4><small>${money(item.price)}</small><div class="qty"><button data-qty="${item.id}" data-delta="-1">−</button><b>${row.qty}</b><button data-qty="${item.id}" data-delta="1">+</button></div></div><div class="cart-price">${item.price?item.price*row.qty+" ج":"—"}</div></div>`}).join("");
  $("#cartTotal").textContent=`${cartTotal()} ج`;
}
function openCart(){$("#cartDrawer").classList.add("open");$("#cartOverlay").hidden=false;document.body.classList.add("locked")}
function closeCart(){$("#cartDrawer").classList.remove("open");$("#cartOverlay").hidden=true;document.body.classList.remove("locked")}
function toast(message){const el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>el.classList.remove("show"),2200)}

async function ensureCustomerSession(){
  if(currentUser) return currentUser;
  if(!window.firebaseReady) return null;
  try{
    const cred = await signInAnonymously();
    currentUser = cred.user;
    return currentUser;
  }catch(err){
    console.error("Anonymous auth failed:", err);
    const code = err?.code || "";
    let message = "تعذر تشغيل جلسة الطلب.";
    if(code.includes("operation-not-allowed")) message = "Anonymous غير مفعّل في Firebase.";
    else if(code.includes("unauthorized-domain")) message = "الدومين ده غير مضاف في Firebase Authorized domains.";
    else if(location.protocol === "file:") message = "شغّل الموقع من رابط الويب وليس من ملف HTML على الجهاز.";
    toast(message);
    return null;
  }
}
function ensureAccountUI(){
  if($("accountBtn")) return;
  const nav=$( ".site-header .nav" );
  const b=document.createElement("button");
  b.id="accountBtn";
  b.className="btn btn-ghost account-btn";
  b.type="button";
  b.textContent="متابعة الطلب";
  nav.insertBefore(b,$("#openCart"));
  b.addEventListener("click",()=>{
    const id=localStorage.getItem("alPrinceLastOrder");
    if(id){
      ensureTrackingUI();
      $("#trackingSection").hidden=false;
      $("#trackingSection").scrollIntoView({behavior:"smooth",block:"start"});
      watchLastOrder();
    }else{
      toast("لسه مفيش طلب عندك");
    }
  });
}
function updateAccountUI(){
  const b=$("#accountBtn");
  if(!b)return;
  b.textContent=localStorage.getItem("alPrinceLastOrder")?"متابعة الطلب":"طلباتي";
}
function openAuth(){
  toast("مش محتاج تعمل حساب. اكتب بيانات التوصيل وقت الطلب وخلاص.");
}

function ensureTrackingUI(){
  if($("#trackingSection"))return;
  const section=document.createElement("section");
  section.id="trackingSection";
  section.className="tracking-section";
  section.hidden=true;
  section.innerHTML=`<div class="container"><div class="tracking-card">
    <div class="tracking-head"><div><span class="eyebrow">LIVE ORDER</span><h2>متابعة طلبك</h2><p id="trackingMeta">—</p></div><span id="trackingStatus" class="tracking-badge">جاري التحميل</span></div>
    <div class="tracking-steps" id="trackingSteps"></div>
    <div class="tracking-details" id="trackingDetails"></div>
    <div class="order-chat">
      <div class="chat-head"><div><span class="eyebrow">DIRECT CHAT</span><h3>تواصل مع المطعم</h3></div><span>💬</span></div>
      <div id="chatMessages" class="chat-messages"><div class="chat-empty">مفيش رسائل لسه. ابعتلنا لو محتاج أي حاجة.</div></div>
      <form id="chatForm" class="chat-form"><input id="chatInput" maxlength="300" placeholder="اكتب رسالتك للمطعم..." autocomplete="off"><button type="submit">إرسال</button></form>
    </div>
  </div></div>`;
  $("main").insertBefore(section,$(".quick-menu"));
  $("#chatForm").addEventListener("submit",sendCustomerMessage);
}
let chatUnsub=null;
function watchOrderChat(){
  if(chatUnsub){chatUnsub();chatUnsub=null;}
  const id=localStorage.getItem("alPrinceLastOrder");
  if(!id || !window.firebaseReady || !currentUser)return;
  const q=query(collection(db,"orders",id,"messages"),orderBy("createdAt","asc"));
  chatUnsub=onSnapshot(q,snap=>{
    const box=$("#chatMessages");
    if(!box)return;
    if(snap.empty){box.innerHTML=`<div class="chat-empty">مفيش رسائل لسه. ابعتلنا لو محتاج أي حاجة.</div>`;return;}
    box.innerHTML=snap.docs.map(d=>{const m=d.data();const mine=m.senderUid===currentUser.uid;return `<div class="chat-bubble ${mine?"mine":"restaurant"}"><span>${esc(m.text||"")}</span><small>${mine?"أنت":"المطعم"}</small></div>`}).join("");
    box.scrollTop=box.scrollHeight;
  },err=>console.error("chat listener",err));
}
async function sendCustomerMessage(e){
  e.preventDefault();
  const input=$("#chatInput");const text=input.value.trim();
  const id=localStorage.getItem("alPrinceLastOrder");
  if(!text||!id)return;
  if(!currentUser) await ensureCustomerSession();
  if(!currentUser||!window.firebaseReady){toast("لا يمكن إرسال الرسالة الآن");return;}
  try{
    await addDoc(collection(db,"orders",id,"messages"),{text,senderUid:currentUser.uid,senderRole:"customer",createdAt:serverTimestamp()});
    input.value="";
  }catch(err){console.error(err);toast("تعذر إرسال الرسالة");}
}
const statusMap={new:{ar:"تم استلام الطلب",cls:"s1"},preparing:{ar:"جاري التحضير",cls:"s2"},ready:{ar:"الطلب جاهز",cls:"s3"},on_the_way:{ar:"في الطريق إليك",cls:"s4"},delivered:{ar:"تم التسليم",cls:"s5"},cancelled:{ar:"ملغي",cls:"sx"}};
function renderTracking(order){
  ensureTrackingUI();const sec=$("#trackingSection");sec.hidden=false;const st=order.status||"new";const labels=["تم استلام الطلب","جاري التحضير","الطلب جاهز","في الطريق إليك","تم التسليم"];const idx={new:0,preparing:1,ready:2,on_the_way:3,delivered:4}[st]??0;$("#trackingStatus").textContent=statusMap[st]?.ar||st;$("#trackingMeta").textContent=`إجمالي ${order.total||0} ج • ${order.items?.length||0} أصناف`;$("#trackingSteps").innerHTML=labels.map((x,i)=>`<div class="track-step ${i<=idx?"done":""}"><span>${i<idx?"✓":i+1}</span><b>${x}</b></div>`).join("");$("#trackingDetails").innerHTML=`<div><span>العميل</span><b>${esc(order.customer?.name||"")}</b></div><div><span>العنوان</span><b>${esc(order.customer?.address||"")}</b></div><div><span>الدليفري</span><b>${esc(order.driver?.name||"لم يتم التعيين بعد")}</b></div>${st==="new"?`<button class="btn btn-ghost full" id="cancelMyOrder" type="button">إلغاء الطلب</button>`:""}`;
}
function watchLastOrder(){if(lastOrderUnsub){lastOrderUnsub();lastOrderUnsub=null}const id=localStorage.getItem("alPrinceLastOrder");if(!id)return;if(!window.firebaseReady){const raw=localStorage.getItem("alPrinceLastOrderData");if(raw)renderTracking(JSON.parse(raw));return}lastOrderUnsub=onSnapshot(doc(db,"orders",id),snap=>{if(snap.exists()){renderTracking(snap.data());watchOrderChat();}});}
document.addEventListener("click",async e=>{
  if(e.target.id!=="cancelMyOrder")return;
  const id=localStorage.getItem("alPrinceLastOrder");
  if(!id || !window.firebaseReady || !currentUser)return;
  if(!confirm("متأكد إنك عايز تلغي الطلب؟"))return;
  try{
    await updateDoc(doc(db,"orders",id),{status:"cancelled"});
    toast("تم إلغاء الطلب");
  }catch(err){console.error(err);toast("تعذر إلغاء الطلب");}
});
async function requireLoginThenCheckout(){
  if(!cart.length){toast("السلة فاضية");return;}
  if(window.firebaseReady){
    const user=await ensureCustomerSession();
    if(!user)return;
  }
  openCheckout();
}
function openCheckout(){if(!cart.length){toast("السلة فاضية");return}closeCart();$("#checkoutModal").hidden=false;document.body.classList.add("locked")}
function closeCheckout(){$("#checkoutModal").hidden=true;document.body.classList.remove("locked")}

document.addEventListener("click",e=>{const catBtn=e.target.closest("[data-cat]");if(catBtn){activeCat=catBtn.dataset.cat;renderCategories();renderMenu();if(catBtn.classList.contains("tab"))$("#menu").scrollIntoView({behavior:"smooth",block:"start"})}const addBtn=e.target.closest("[data-add]");if(addBtn)addToCart(addBtn.dataset.add);const qtyBtn=e.target.closest("[data-qty]");if(qtyBtn)changeQty(qtyBtn.dataset.qty,Number(qtyBtn.dataset.delta));const filterLink=e.target.closest("[data-filter-link]");if(filterLink){activeCat=filterLink.dataset.filterLink;renderCategories();renderMenu();}});
$("#searchInput").addEventListener("input",e=>{search=e.target.value;renderMenu()});$("#openCart").addEventListener("click",openCart);$("#openCartBottom").addEventListener("click",openCart);$("#closeCart").addEventListener("click",closeCart);$("#cartOverlay").addEventListener("click",closeCart);$("#checkoutBtn").addEventListener("click",requireLoginThenCheckout);$("#closeCheckout").addEventListener("click",closeCheckout);

$("#checkoutForm").addEventListener("submit",async e=>{e.preventDefault();const data=new FormData(e.currentTarget);if(window.firebaseReady && !currentUser){await ensureCustomerSession();}if(window.firebaseReady && !currentUser){toast("تعذر إنشاء جلسة الطلب");return}const order={customer:{uid:currentUser?.uid||"guest",name:data.get("name"),phone:data.get("phone"),address:data.get("address")},notes:data.get("notes")||"",items:cart.map(row=>{const item=menu.find(x=>x.id===row.id);return{id:row.id,name:item?.ar||"",qty:row.qty,unitPrice:item?.price||0}}),total:cartTotal(),status:"new",driver:{uid:"",name:""},createdAt:window.firebaseReady?serverTimestamp():new Date()};try{
  if(window.firebaseReady && currentUser){
    await setDoc(doc(db,"users",currentUser.uid),{role:"customer",name:order.customer.name,phone:order.customer.phone,updatedAt:serverTimestamp()},{merge:true});
    const ref=await addDoc(collection(db,"orders"),order);localStorage.setItem("alPrinceLastOrder",ref.id);watchLastOrder();
  }else{
    const localId="LOCAL-"+Date.now(); order.id=localId; order.status="new"; localStorage.setItem("alPrinceLastOrderData",JSON.stringify(order)); localStorage.setItem("alPrinceLastOrder",localId); renderTracking(order);
  }
  cart=[];saveCart();renderCart();closeCheckout();e.currentTarget.reset();$("#trackingSection")?.scrollIntoView({behavior:"smooth"});toast(window.firebaseReady?"تم إرسال الطلب للمطعم ✓":"تم تسجيل الطلب في المعاينة ✓");
}catch(err){console.error(err);toast("تعذر إرسال الطلب. تأكد من Firebase.")}});

ensureAccountUI();ensureTrackingUI();renderCategories();renderMenu();renderCart();
(async()=>{
  if(window.firebaseReady){
    await ensureCustomerSession();
  }
  updateAccountUI();
  watchLastOrder();
  if(localStorage.getItem("alPrinceLastOrder")){ensureTrackingUI();$("#trackingSection").hidden=false;watchOrderChat();}
})();
