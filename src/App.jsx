import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
import './styles.css';

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key = {item.id}
        item = {item} 
      />
    )
  })

  return (
    <dev>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </dev>
  )
}

export default App
