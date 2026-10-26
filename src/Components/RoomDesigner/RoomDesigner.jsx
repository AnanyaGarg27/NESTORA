import React, { useContext, useState, useEffect } from "react";
import { PreferencesContext } from "../../PreferencesContext";
import "./RoomDesigner.css";

const furniture = {
  Bedroom: [
    { name: "Bed", price: 30000, image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80" },
    { name: "Wardrobe", price: 20000, image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400" },
    { name: "Bedside Table", price: 4000, image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=400" },
    { name: "Dresser", price: 12000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjlPxyQcEU2etGy7aA8B5gSlmiDdDP5CRBejWfTmcdzg&s=10" },
    { name: "Study Table", price: 8000, image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400" },
    { name: "Chair", price: 4000, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400" },
    { name: "Bookshelf", price: 6000, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400" },
    { name: "Nightstand Lamp", price: 2000, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400" }
  ],
  "Living Room": [
    { name: "Sofa", price: 25000, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400" },
    { name: "Coffee Table", price: 8000, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=400" },
    { name: "TV Unit", price: 15000, image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400" },
    { name: "Armchair", price: 7000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYx5dBZhMzn9XabtPZqGJEbufer1et9rC7fzGG37VkgQ&s=10" },
    { name: "Bookshelf", price: 6000, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400" },
    { name: "Side Table", price: 3500, image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=400" },
    { name: "Floor Lamp", price: 3000, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400" },
    { name: "Ottoman", price: 4500, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400" }
  ],
  Kitchen: [
    { name: "Kitchen Island", price: 25000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUGNrkqxX-G38KpeS7Ez16JxA3_k83JUfhPEDXeubjw&s=10" },
    { name: "Base Cabinet", price: 12000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2KV8idvj-4f1jWOdgp7XpX9cWU0vyxpE825Nh8J3A&s=10" },
    { name: "Wall Cabinet", price: 8000, image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400" },
    { name: "Pantry Unit", price: 18000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkIhsZNhnBNy_XV5tLqmXoVCjiUv6WvxKKKYfVJEQqkg&s=10" },
    { name: "Bar Stool", price: 2500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtWXtR1oFqETITJr_JHjsqe2pu-Rtr7HnwT0uxjmd3xQ&s=10" },
    { name: "Kitchen Trolley", price: 4500, image: "https://assets.wfcdn.com/im/50496968/resize-h400-w400%5Ecompr-r85/4196/419670134/Kitchen%2BIsland%2BCart%2BWith%2BMicrowave%2BSpace%2C%2B39.4%22w%2BX%2B35.4%22h%2BRolling%2BKitchen%2BIsland%2BWith%2BDrop%2BLeaf%2CLockable%2BWheel%2C%2B3%2BOpen%2BShelves%2C%2BDrawer%2B%26%2BCabinet%2C%2BWhite.jpg" },
    { name: "Microwave Stand", price: 5000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB1B48Ye1FFTJl7AcYUZ7LfCbaJ38ZPc4hU6qnrdLWkg&s" },
    { name: "Breakfast Counter", price: 12000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF-39sDPotym4-ceHhnQKgRFT85_iRxjKm_yrABZTFPw&s=10" }
  ],
  Office: [
    { name: "Work Desk", price: 10000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTT3hdZIQKv0faUhbSB5tniSBnUiH0PCbli6NrUuutw&s=10" },
    { name: "Office Chair", price: 5000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpm0Zh4HWCJWRvjSy1x9sVGMAsFSeH6FxB6HM7JGYGQ&s=10" },
    { name: "Bookshelf", price: 6000, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400" },
    { name: "Filing Cabinet", price: 7000, image: "https://m.media-amazon.com/images/I/71cHKFmkCML._AC_UF894,1000_QL80_.jpg" },
    { name: "Storage Unit", price: 8000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBZ6a7fIueWfqHqDRRpwZnivb--8G1Sc32A14-fEd4w&s=10" },
    { name: "Meeting Table", price: 18000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE91SoEAlYOnJT_EJQHUM-VJsTV7PXtG6zwKhjEZ-LwA&s=10" },
    { name: "Visitor Chair", price: 3500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd7ImAEC7Ar85eNa-hGaedBw-PY4dt__inrQn-9NSRgQ&s=10" },
    { name: "Desk Side Table", price: 4000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNHpPXZvGCYhKvc7BiDxHlG4GwCgSvFm2GWA6d_FQwA&s=10" }
  ],
  Bathroom: [
    { name: "Vanity Unit", price: 12000, image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80" },
    { name: "Under-Sink Cabinet", price: 8000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKTs8bzGjLc-hOW64KTdV3DGXOUsUkUUxlp4SxYo60VA&s=10" },
    { name: "Mirror Cabinet", price: 6000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QUK2mDFd98Mghu1ERdYZMSpEEPGqtsMRotNBDOH5Qw&s=10" },
    { name: "Linen Rack", price: 3500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFSCA4jI81uFukMFuU2s4FcoAueRcM7tnIUyGqLXaiw&s=10" },
    { name: "Laundry Hamper", price: 2000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0VqJyUHtg280o3phYdEj5e6KirOko0VXWDZXxv7zLfQ&s=10" },
    { name: "Bathroom Stool", price: 1500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPV1NwKmWgWqHyyoUw8nldgYgosrNcf-onfFXBEkGnZA&s=10" }
  ]
};

const colors = ["#f7f1e8", "#e8d6bd", "#d7d8d5", "#cbd7c3", "#c9d8e5"];
const floors = ["Wood", "Marble", "Tiles", "Carpet"];

const floorRates = {
  Wood: 200,
  Marble: 250,
  Tiles: 150,
  Carpet: 100
};

const paintingRates = {
  "Standard Paint": 25,
  "Premium Paint": 40
};

function parseBudget(value) {
  if (!value || value === "Not selected") return null;

  const text = String(value).replace(/[₹,\s]/g, "").toLowerCase();
  const match = text.match(/[\d.]+[kl]?/g);

  if (!match) return null;

  const last = match[match.length - 1];
  return parseFloat(last) *
    (last.endsWith("l") ? 100000 : last.endsWith("k") ? 1000 : 1);
}

const money = value => "₹" + value.toLocaleString("en-IN");

export default function RoomDesigner() {
  const { preferences } = useContext(PreferencesContext);

  const [room, setRoom] = useState(preferences?.room || "Bedroom");
  const [width, setWidth] = useState(12);
  const [length, setLength] = useState(15);
  const [height, setHeight] = useState(9);
  const [wall, setWall] = useState(colors[1]);
  const [floor, setFloor] = useState("Wood");
  const [painting, setPainting] = useState("Premium Paint");
  const [placed, setPlaced] = useState([]);
  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState(null);
  const [action, setAction] = useState(null);
  const [sort, setSort] = useState("low");

  const [showModal, setShowModal] = useState(false);
  const [designName, setDesignName] = useState("");
  const [toast, setToast] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [saved, setSaved] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("nestoraSavedDesigns")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("nestoraSavedDesigns", JSON.stringify(saved));
  }, [saved]);

  // Use the preferences selected by the user.
  const budgetText = preferences?.budget || "Not selected";
  const budget = parseBudget(budgetText);

  const furnitureCost = cart.reduce(
    (sum, item) => sum + item.price * item.qty, 0
  );

  const floorCost = width * length * floorRates[floor];
  const wallCost = 2 * (width + length) * height * paintingRates[painting];
  const total = furnitureCost + floorCost + wallCost;

  const items = (furniture[room] || [])
    .filter(item => budget === null || item.price <= budget)
    .sort((a, b) => sort === "low"
      ? a.price - b.price
      : b.price - a.price);

  function addItem(item) {
    setCart(old => {
      const found = old.find(f => f.name === item.name);
      return found
        ? old.map(f => f.name === item.name ? { ...f, qty: f.qty + 1 } : f)
        : [...old, { ...item, qty: 1 }];
    });

    const existing = placed.find(f => f.name === item.name);
    if (existing) {
      setSelected(existing.id);
      return;
    }

    const id = Date.now();

    setPlaced(old => [...old, {
      ...item, id, x: 10, y: 10 + old.length * 5,
      w: 25, h: 25, angle: 0
    }]);

    setSelected(id);
  }

  function updateItem(id, changes) {
    setPlaced(old => old.map(f => f.id === id ? { ...f, ...changes } : f));
  }

  function startAction(e, item, type, corner = "") {
    e.preventDefault();
    e.stopPropagation();

    if (e.currentTarget.setPointerCapture) {
      e.currentTarget.setPointerCapture(e.pointerId);
    }

    setSelected(item.id);
    setAction({
      type, corner, id: item.id,
      startX: e.clientX, startY: e.clientY,
      x: item.x, y: item.y, w: item.w, h: item.h
    });
  }

  function moveAction(e) {
    if (!action) return;

    const box = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - action.startX) / box.width * 100;
    const dy = (e.clientY - action.startY) / box.height * 100;

    if (action.type === "move") {
      updateItem(action.id, {
        x: Math.max(0, Math.min(100 - action.w, action.x + dx)),
        y: Math.max(0, Math.min(100 - action.h, action.y + dy))
      });
    }

    if (action.type === "resize") {
      let { x, y, w, h } = action;
      const c = action.corner;

      if (c.includes("r")) w = Math.max(10, Math.min(100 - x, action.w + dx));
      if (c.includes("b")) h = Math.max(10, Math.min(100 - y, action.h + dy));

      if (c.includes("l")) {
        w = Math.max(10, Math.min(action.w - dx, action.x + action.w));
        x = action.x + action.w - w;
      }

      if (c.includes("t")) {
        h = Math.max(10, Math.min(action.h - dy, action.y + action.h));
        y = action.y + action.h - h;
      }

      updateItem(action.id, { x, y, w, h });
    }
  }

  function removeItem(name) {
    setPlaced(old => old.filter(f => f.name !== name));
    setCart(old => old.filter(f => f.name !== name));
    setSelected(null);
    setAction(null);
  }

  function saveDesign() {
    setDesignName(
      editingId !== null
        ? saved.find(d => d.id === editingId)?.name || ""
        : ""
    );
    setShowModal(true);
  }

  function confirmSave() {
    if (!designName.trim()) {
      setToast("Please enter a design name!");
      setTimeout(() => setToast(""), 2500);
      return;
    }

    const design = {
      name: designName.trim(), room, width, length, height,
      wall, floor, painting, placed, cart
    };

    if (editingId !== null) {
      setSaved(old => old.map(d =>
        d.id === editingId ? { ...d, ...design } : d
      ));
      setToast("✨ Design updated successfully!");
    } else {
      setSaved(old => [...old, { id: Date.now(), ...design }]);
      setToast("✨ Design saved successfully!");
    }

    setEditingId(null);
    setShowModal(false);
    setTimeout(() => setToast(""), 3000);
  }

  function loadDesign(d) {
    setRoom(d.room);
    setWidth(d.width);
    setLength(d.length);
    setHeight(d.height || 9);
    setWall(d.wall);
    setFloor(d.floor);
    setPainting(d.painting || "Premium Paint");
    setPlaced(d.placed || []);
    setCart(d.cart || []);
    setSelected(null);
    setAction(null);
    setEditingId(d.id);
  }

  // Changes the floor appearance when the flooring selection changes.
  const floorStyle = {
    background: {
      Wood: "repeating-linear-gradient(0deg, #c9a77f 0px, #c9a77f 38px, #b99368 39px, #b99368 41px)",
      Marble: "repeating-linear-gradient(135deg, #f0efeb 0px, #f0efeb 45px, #d4d2cc 46px, #d4d2cc 48px)",
      Tiles: "linear-gradient(#d8d5cf 1px, transparent 1px), linear-gradient(90deg, #d8d5cf 1px, transparent 1px), #eeeae3",
      Carpet: "#b9a6c8"
    }[floor],
    backgroundSize: floor === "Tiles" ? "50px 50px" : "auto"
  };

  return (
    <div className="designer-page">
      <header className="designer-header">
        <div className="designer-logo">
          <span className="nestora-mark">
            <span className="mark-left" />
            <span className="mark-right" />
          </span>
          <span className="logo-text">Nestora</span>
        </div>

        <div className="designer-heading">
          <h1>Design Your Space</h1>
          <p>Create a room that feels like you.</p>
        </div>

        <button className="save-button" onClick={saveDesign}>Save Design</button>
      </header>

      {showModal && (
        <div className="save-modal-overlay" onClick={e => {
          if (e.target === e.currentTarget) setShowModal(false);
        }}>
          <div className="save-modal">
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <div className="modal-icon">✦</div>
            <h2>{editingId !== null ? "Update Your Design" : "Save Your Design"}</h2>
            <p>Give your beautiful space a name.</p>
            <input
              autoFocus
              type="text"
              placeholder="e.g. Dream Bedroom"
              value={designName}
              onChange={e => setDesignName(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter") confirmSave();
                if (e.key === "Escape") setShowModal(false);
              }}
            />
            <button className="modal-save-btn" onClick={confirmSave}>
              {editingId !== null ? "Update Design" : "Save Design"}
            </button>
          </div>
        </div>
      )}

      {toast && <div className="nestora-toast"><span>✦</span>{toast}</div>}

      <div className="designer-layout">
        {/* LEFT PANEL */}
        <aside className="left-panel">
          <h3>Room Settings</h3>

          <label>Room Type</label>
          <select value={room} onChange={e => {
            setRoom(e.target.value);
            setPlaced([]);
            setCart([]);
            setSelected(null);
          }}>
            {Object.keys(furniture).map(r => <option key={r}>{r}</option>)}
          </select>

          <label>Width (ft)</label>
          <input type="number" min="6" max="40" value={width}
            onChange={e => setWidth(Math.max(6, Math.min(40, +e.target.value || 6)))} />

          <label>Length (ft)</label>
          <input type="number" min="6" max="40" value={length}
            onChange={e => setLength(Math.max(6, Math.min(40, +e.target.value || 6)))} />

          <label>Height (ft)</label>
          <input type="number" min="6" max="20" value={height}
            onChange={e => setHeight(Math.max(6, Math.min(20, +e.target.value || 6)))} />

          <label>Wall Colour</label>
          <div className="color-options">
            {colors.map(c => (
              <button key={c} className="color-option"
                style={{ background: c, outline: wall === c ? "2px solid #6242d6" : "none" }}
                onClick={() => setWall(c)} aria-label={`Choose wall colour ${c}`} />
            ))}
          </div>

          <label>Flooring</label>
          <select value={floor} onChange={e => setFloor(e.target.value)}>
            {floors.map(f => <option key={f}>{f}</option>)}
          </select>

          <label>Wall Painting</label>
          <select value={painting} onChange={e => setPainting(e.target.value)}>
            {Object.keys(paintingRates).map(p => (
              <option key={p} value={p}>{p} — ₹{paintingRates[p]}/sq ft</option>
            ))}
          </select>

          <div className="preference-card">
            <h4>Your Preferences ✨</h4>
            <p>Style: {preferences?.style || "Not selected"}</p>
            <p>Colour: {preferences?.color || "Not selected"}</p>
            <p>Budget: {budgetText}</p>
          </div>

          <section className="saved-designs">
            <h4>My Saved Designs ({saved.length})</h4>
            {saved.length === 0 ? <p>No saved designs yet.</p> :
              saved.map(d => (
                <div className="cart-item saved-item" key={d.id}>
                  <div>
                    <strong>{d.name}</strong>
                    <p>{d.room} · {d.width} × {d.length} ft</p>
                  </div>
                  <button onClick={() => loadDesign(d)}>Open</button>
                  <button onClick={() => {
                    setSaved(old => old.filter(s => s.id !== d.id));
                    if (editingId === d.id) setEditingId(null);
                  }} aria-label={`Delete ${d.name}`}>×</button>
                </div>
              ))
            }
          </section>
        </aside>

        {/* ROOM CANVAS */}
        <main className="canvas-area">
          <div className="canvas-header">
            <h2>Your 2D Room</h2>
            <span>{width} × {length} ft</span>
          </div>

          <div className={`room-canvas floor-${floor.toLowerCase()}`}
            style={{ "--wall-color": wall, aspectRatio: `${width}/${length}` }}>
            <div className="room-top-wall">WINDOW</div>

            <div className="room-floor" style={floorStyle}
              onPointerMove={moveAction}
              onPointerUp={() => setAction(null)}
              onPointerCancel={() => setAction(null)}
              onPointerDown={e => {
                if (e.target === e.currentTarget) setSelected(null);
              }}>
              {placed.map(item => (
                <div key={item.id}
                  className={`placed-furniture ${selected === item.id ? "selected-furniture" : ""}`}
                  style={{
                    left: `${item.x}%`, top: `${item.y}%`,
                    width: `${item.w}%`, height: `${item.h}%`,
                    transform: `rotate(${item.angle}deg)`
                  }}
                  onPointerDown={e => {
                    if (e.target !== e.currentTarget &&
                      !e.target.classList.contains("furniture-image") &&
                      !e.target.classList.contains("furniture-name")) return;
                    startAction(e, item, "move");
                  }}>
                  <img className="furniture-image" src={item.image} alt={item.name} draggable="false" />
                  <small className="furniture-name">{item.name}</small>

                  {selected === item.id && <>
                    <button className="furniture-action rotate-action"
                      onPointerDown={e => e.stopPropagation()}
                      onClick={e => {
                        e.stopPropagation();
                        updateItem(item.id, { angle: (item.angle + 15) % 360 });
                      }}>↻</button>

                    <button className="furniture-action delete-action"
                      onPointerDown={e => e.stopPropagation()}
                      onClick={e => {
                        e.stopPropagation();
                        removeItem(item.name);
                      }}>×</button>

                    {["tl", "tr", "bl", "br"].map(c => (
                      <button key={c} className={`resize-handle handle-${c}`}
                        onPointerDown={e => startAction(e, item, "resize", c)}
                        aria-label={`Resize ${item.name} ${c}`}>↔</button>
                    ))}
                  </>}
                </div>
              ))}
            </div>
          </div>

          <p className="planner-tip">Select furniture to move, resize, rotate or delete it.</p>
        </main>

        {/* RIGHT PANEL */}
        <aside className="right-panel furniture-collection">
          <h3>Furniture Collection</h3>
          <p className="budget-label">Your budget: <strong>{budgetText}</strong></p>

          <label>Sort by Price</label>
          <select value={sort} onChange={e => setSort(e.target.value)}>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>

          <p className="item-count">{items.length} furniture items available</p>

          <div className="furniture-grid">
            {items.map(item => (
              <article className="furniture-card" key={item.name}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="furniture-card-content">
                  <h4>{item.name}</h4>
                  <p>{money(item.price)}</p>
                  <button onClick={() => addItem(item)}>+ Add to Cart</button>
                </div>
              </article>
            ))}
          </div>

          {items.length === 0 && <p>No furniture available within this budget.</p>}

          {/* TOTAL COST AND CART */}
          <div className="cost-card">
            <p>Furniture Cost</p>
            <h3>{money(furnitureCost)}</h3>

            <p>Flooring Cost ({floor})</p>
            <h3>{money(floorCost)}</h3>

            <p>Wall Painting Cost ({painting})</p>
            <h3>{money(wallCost)}</h3>

            <hr />
            <p><strong>Total Estimated Cost</strong></p>
            <h2>{money(total)}</h2>

            <div className="budget-progress">
              <div style={{
                width: `${budget ? Math.min(total / budget * 100, 100) : 0}%`
              }} />
            </div>

            <p className={budget && total > budget ? "over-budget" : ""}>
              {!budget
                ? "Select a budget in Your Preferences to track your budget."
                : total > budget
                  ? `Over budget by ${money(total - budget)}`
                  : `${money(budget - total)} remaining`}
            </p>

            <h4>Your Cart</h4>
            {cart.length === 0 && <p>Your cart is empty.</p>}

            {cart.map(item => (
              <div className="cart-item cart-item-new" key={item.name}>
                <img src={item.image} alt={item.name} />
                <div className="cart-details">
                  <strong>{item.name}</strong>
                  <p>{money(item.price)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => {
                      if (item.qty === 1) removeItem(item.name);
                      else setCart(old => old.map(f =>
                        f.name === item.name ? { ...f, qty: f.qty - 1 } : f
                      ));
                    }}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => setCart(old => old.map(f =>
                      f.name === item.name ? { ...f, qty: f.qty + 1 } : f
                    ))}>+</button>
                  </div>
                </div>
                <button className="delete-button" onClick={() => removeItem(item.name)}>×</button>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}