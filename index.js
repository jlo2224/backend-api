// todo

async function callPythonScript() {
  const response = await fetch('/api.py', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // will fail, just loading with sample code
    },
    body: JSON.stringify({ data: 'input' })
  });
  const result = await response.json();
  console.log(result);
}
