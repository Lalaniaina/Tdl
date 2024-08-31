const [count, setCount] = useState(0)
  const increment = () => {
    console.log ('hi');
    setCount(count + 1)
    console.log(setCount(count + 1))
  }

    <div>
        <p>Compteur: {count}</p>
        <button onClick={increment}>Incrementer</button>
    </div>