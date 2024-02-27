export const financas = await fetch("http://localhost:3000/financas")
.then((r) => r.json())
.then((r) => r)