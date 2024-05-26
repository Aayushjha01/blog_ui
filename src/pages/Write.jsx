import React,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  return (
    <div className="add">
      <div className="wrapper">
      <div className="con">
        <div>
        <input type="text" name="" id="" placeholder='Title'/>
        </div>
       
        <div className="editor">
        <ReactQuill className='edit' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <h1>Publish</h1>
        <div className="item">
          <span>
            <b>Visibility:Public</b>
          </span>
          <span>
            <b>Saved:Draft</b>
          </span>

        </div>
        <div className="item">
          <div className="cat">
            <label htmlFor="politics">Politics</label>
            <input type="radio" name="politics" id="politics" value="politics"/>
          </div>
          <div className="cat">
            <label htmlFor="politics">Politics</label>
            <input type="radio" name="politics" id="politics" value="politics"/>
          </div>
          <div className="cat">
            <label htmlFor="politics">Politics</label>
            <input type="radio" name="politics" id="politics" value="politics"/>
          </div>
          <div className="cat">
            <label htmlFor="politics">Politics</label>
            <input type="radio" name="politics" id="politics" value="politics"/>
          </div>
          <div className="cat">
            <label htmlFor="politics">Politics</label>
            <input type="radio" name="politics" id="politics" value="politics"/>
          </div>
          <div className="cat">
            <label htmlFor="politics">Politics</label>
            <input type="radio" name="politics" id="politics" value="politics"/>
          </div>
          <div className="cat">
            <label htmlFor="politics">Politics</label>
            <input type="radio" name="politics" id="politics" value="politics"/>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Write