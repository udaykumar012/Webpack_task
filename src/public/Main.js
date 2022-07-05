import React from 'react'

//creating small component
// const Greeting=()=><h1>Hello from REACT123</h1>

const Main=()=>{
    return (
        
         <main class="main_content">
        <div class="flex-container1">
            <div id="headingelements"><b>Select Categeory</b><br/>
                <select>
                    <option>All</option>
                    <option>Sports</option>
                </select>
            </div>
            <div id="heading" ><br/><h3><span>ALL NEWS</span></h3></div>
            <div id="headingelements1"><span><b>Subscribe</b></span><br/><input type="text" placeholder="Email Address"/><button id="subscribe">Subscribe</button></div>
        </div>
        <hr class="Dark_Line"/>
        <div class="NewsAricles">
        <div  class="newsfeed">
            <div><img  src="https://m.media-amazon.com/images/I/51UW1849rJL._AC_SY450_.jpg" alt="News" / ></div>
            <div><ul>
                <li class="title"><b>Title One</b></li>
                <li class="d_c">Posted on <b>31 May, 2022</b> // Categeory:<b> Categeory One </b></li>
               <li class="def">The use in this publication of trade names, trademarks, service marks, and similar terms, even if they are not
                identified as such, is not to be taken as an expression of opinion as to whether or not they are subject to
                proprietary rights.
                While the advice and information in this book are believed to be true and accurate at the date of publication,
                neither the author nor the editors nor the publisher can accept any legal responsibility for any errors or
                omissions that may be made. </li>
                <li><button id="continueReading1">Continue Reading</button></li>
                </ul>
            </div>
        </div>
        <hr />
        <div  class="newsfeed">
            <div><img  src="https://m.media-amazon.com/images/I/51UW1849rJL._AC_SY450_.jpg" alt="News"  /></div>
            <div><ul>
                <li class="title"><b>Title Two</b></li>
                <li class="d_c">Posted on <b>31 May, 2022</b> // Categeory:<b> Categeory One </b></li>
               <li class="def">The use in this publication of trade names, trademarks, service marks, and similar terms, even if they are not
                identified as such, is not to be taken as an expression of opinion as to whether or not they are subject to
                proprietary rights.
                While the advice and information in this book are believed to be true and accurate at the date of publication,
                neither the author nor the editors nor the publisher can accept any legal responsibility for any errors or
                omissions that may be made. </li>
                <li><button id="continueReading2">Continue Reading</button></li>
                </ul>
            </div>
        </div>
        <hr />
        <div  class="newsfeed">
            <div><img  src="https://m.media-amazon.com/images/I/51UW1849rJL._AC_SY450_.jpg" alt="News" /></div>
            <div><ul>
                <li class="title"><b>Title Three</b></li>
                <li class="d_c">Posted on <b>31 May, 2022</b> // Categeory:<b> Categeory One </b></li>
               <li class="def">The use in this publication of trade names, trademarks, service marks, and similar terms, even if they are not
                identified as such, is not to be taken as an expression of opinion as to whether or not they are subject to
                proprietary rights.
                While the advice and information in this book are believed to be true and accurate at the date of publication,
                neither the author nor the editors nor the publisher can accept any legal responsibility for any errors or
                omissions that may be made. </li>
                <li><button id="continueReading3">Continue Reading</button></li>
                </ul>
            </div>
        </div>
        <hr/>
        <div  class="newsfeed">
            <div><img  src="https://m.media-amazon.com/images/I/51UW1849rJL._AC_SY450_.jpg" alt="News" /></div>
            <div><ul>
                <li class="title"><b>Title Four</b></li>
                <li class="d_c">Posted on <b>31 May, 2022</b> // Categeory:<b> Categeory One </b></li>
               <li class="def">The use in this publication of trade names, trademarks, service marks, and similar terms, even if they are not
                identified as such, is not to be taken as an expression of opinion as to whether or not they are subject to
                proprietary rights.
                While the advice and information in this book are believed to be true and accurate at the date of publication,
                neither the author nor the editors nor the publisher can accept any legal responsibility for any errors or
                omissions that may be made. </li>
                <li><button id="continueReading4">Continue Reading</button></li>
                </ul>
            </div>
        </div>
        <br/><br/>
    </div>
    </main>
        
    )
}
export default Main;