import React from 'react'   //Horizontal News popup 
import './NewsPopup.css'

function News(props) {
  return (
    <div>
    <div className='backdrop' onClick={props.onConform}/>
    <div className='news'>
        <header>
            <div className='heading'><img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png" alt="" /> <p>Share to Whatsapp</p></div>
            <div onClick={props.onConform} className='closeButton'>X</div>
        </header>
        <main>
            <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDA0AJjyyfl9SC28cYh0H_OuChB1pUM53glA&usqp=CAU" alt="" />
            <div className="content">
                <div>
                <div className='head'><img className='img' src="https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/BBC_News.svg/2560px-BBC_News.svg.png" alt="" />
                bbcnews
                </div>
                <h1>{props.title}</h1>
                <p>{props.body}</p>
                </div>
                <footer>
                    <div>
                        <img src="https://images.vexels.com/media/users/3/223247/isolated/lists/32bfd7335b2e334bff40b97de9061096-like-social-media-icon.png" alt="" />
                        <img src="https://www.freeiconspng.com/thumbs/comment-png/comment-png-17.png" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY3Rcc6FNpeg-Nt8OeX_bwb2-HnZZip3FKWA&usqp=CAU" alt="" />
                    </div>
                    <button><img src="https://cdn-icons-png.flaticon.com/512/52/52049.png" alt="" />Share</button>
                </footer>
            </div>
        </main>
        
        </div>
    </div>
  )
}

export default News
