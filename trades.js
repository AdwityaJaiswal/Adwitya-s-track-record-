// Add your trades here. Copy a trade object to create another card.
// image: put a chart image in /images and use e.g. "images/trade-007.jpg"
const trades = [
  {
    id:"1", asset:"XAUUSD", direction:"BUY", session:"London", date:"21 Sep 2026",
    entry:"3,742.5", sl:"3,732.5", tp:"3,762.5", rr:"1:2", result:"TP", r:2,
    image:"", setup:"Liquidity sweep → MSS → FVG",
    analysis:"Price swept sell-side liquidity, reclaimed structure and formed an entry around the imbalance."
  },
  {
    id:"2", asset:"NAS100", direction:"SELL", session:"New York", date:"18 Sep 2026",
    entry:"24,180", sl:"24,230", tp:"24,080", rr:"1:2", result:"TP", r:2,
    image:"", setup:"Resistance rejection",
    analysis:"Rejection from a marked HTF level followed by a lower-timeframe structure break."
  },
  {
    id:"3", asset:"XAUUSD", direction:"SELL", session:"London", date:"16 Sep 2026",
    entry:"3,758.0", sl:"3,768.0", tp:"3,738.0", rr:"1:2", result:"SL", r:-1,
    image:"", setup:"Liquidity sweep",
    analysis:"The planned setup invalidated after price continued through the level."
  },
  {
    id:"4", asset:"EURUSD", direction:"BUY", session:"London", date:"12 Sep 2026",
    entry:"1.1710", sl:"1.1695", tp:"1.1740", rr:"1:2", result:"TP", r:2,
    image:"", setup:"FVG continuation",
    analysis:"Continuation after a clean displacement and retracement into the imbalance."
  },
  {
    id:"5", asset:"XAUUSD", direction:"BUY", session:"New York", date:"10 Sep 2026",
    entry:"3,721.0", sl:"3,711.0", tp:"3,741.0", rr:"1:2", result:"SL", r:-1,
    image:"", setup:"Range breakout",
    analysis:"Breakout failed and returned through the invalidation level."
  },
  {
    id:"6", asset:"XAUUSD", direction:"BUY", session:"London", date:"07 Sep 2026",
    entry:"3,705.0", sl:"3,695.0", tp:"3,725.0", rr:"1:2", result:"TP", r:2,
    image:"", setup:"Structure shift",
    analysis:"Sweep and reclaim with confirmation on the lower timeframe."
  }
];
