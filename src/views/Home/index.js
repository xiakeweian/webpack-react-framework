import React, { useState, Component } from 'react'
import { useSelector, connect } from 'react-redux'
import './index.less'


class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  componentDidMount () {
    this.setState({
      count: this.state.count + 1,
    })
    console.log(this.state.count, 'kkk')
  }
  render () {
    return <div>count:{this.state.count}</div>
  }
}

const Home = (props) => {
  const posts = useSelector((state) => state.posts)
  const [count, setCount] = useState(0)

  const renderedPosts = posts.map((post) => (
    <article className='post-excerpt' key={post.id}>
      <h3>{post.title}</h3>
      <p className='post-content'>{post.content.substring(0, 100)}</p>
    </article>
  ))

  const handlePlus = () => {
    setCount(count + 1)
    console.log('count:', count)
    setCount(count + 1)
  }

  return (
    <section className='posts-list'>
      home页面
    </section>
  )
}
export default connect(({ home }) => ({ home }))(Home)
