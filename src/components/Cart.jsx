import { ClearCartIcon } from './Icons'

export default function Cart() {
  return (
    <aside className="cart">
      <ul>
        <li>
          <img
            src="https://i.dummyjson.com/data/products/6/thumbnail.png"
            alt="Macbook"
          />
          <div>
            <strong>Macbook</strong> - $1749
          </div>
          <footer>
            <small>Qty: 1</small>
            <button>+</button>
          </footer>
        </li>
      </ul>
      <button>
        <ClearCartIcon />
      </button>
    </aside>
  )
}
