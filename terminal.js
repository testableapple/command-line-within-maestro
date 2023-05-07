var response = http.post(`http://localhost:4567/terminal?async=${async}`, {
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ command: exec })
})

output.terminal = response.body;
