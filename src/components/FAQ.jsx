import React from 'react'
import './FAQ.css'
import QA from './UIComponents/QA'
const FAQ = () => {
    

 let content = `Lorem \n ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus elementum tempor. Quisque euismod mauris iaculis libero fermentum, non eleifend dolor commodo. Pellentesque sem nulla, ornare ac sagittis vitae, tincidunt sodales ipsum. Nam libero est, tincidunt eu tincidunt a, fermentum at velit. Donec consequat vulputate euismod. Vivamus pellentesque, nisi malesuada pellentesque tempus, elit quam consectetur turpis, efficitur semper felis arcu nec eros. Curabitur lobortis lobortis velit, sit amet tincidunt nulla venenatis nec. Aliquam lacinia tincidunt sem nec ultricies. Suspendisse vehicula mi tellus.

Maecenas at varius erat. Vivamus eleifend lorem eget lacus sodales, nec ultrices velit volutpat. Nulla blandit massa eu fermentum venenatis. Mauris id vestibulum augue. Nunc a ligula metus. Pellentesque sed nibh ex. Nulla non tortor nisl. Nunc iaculis hendrerit enim, a feugiat orci commodo tempor.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin sit amet urna a nibh sollicitudin porttitor. Integer ac iaculis odio. Nunc consectetur id libero et dapibus. In hac habitasse platea dictumst. Etiam eros nisl, egestas nec massa sit amet, lacinia tincidunt quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras luctus eleifend vehicula. Maecenas porttitor vulputate dolor. Etiam gravida tellus orci, bibendum maximus leo suscipit at. Proin ullamcorper et tortor in ultrices. Nullam quis massa vestibulum massa tempus feugiat. Etiam vel urna ex. Integer id mauris dui. Maecenas magna diam, rhoncus nec purus a, efficitur eleifend risus. Curabitur elit mauris, ornare sit amet rutrum eget, rhoncus non sem.

Fusce mi tortor, laoreet a eleifend vel, lobortis sit amet lectus. Nullam faucibus, risus vel porta hendrerit, lorem lorem interdum dolor, sit amet tincidunt quam ex ac mauris. Aliquam nisi nulla, convallis dignissim cursus vitae, congue semper felis. Pellentesque odio purus, efficitur a odio in, interdum aliquet sem. Cras mollis accumsan varius. Donec cursus purus a pharetra lobortis. Nullam efficitur in ex nec porttitor. Vestibulum iaculis magna ut urna auctor fermentum lobortis et dui. Nunc vel metus sed dui tincidunt mollis.

Nullam sit amet tortor nec nisi vestibulum pellentesque quis et elit. Morbi semper semper ante, a placerat erat sodales faucibus. Phasellus venenatis at sapien in iaculis. Curabitur suscipit justo magna. Pellentesque porta auctor turpis, nec ultrices ante sollicitudin quis. Mauris venenatis urna vel augue scelerisque dapibus. Integer posuere interdum vulputate. Proin imperdiet sed lacus nec cursus. Duis sagittis turpis sed blandit pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut interdum diam. `
    content = content.replace("\n","<br>")
return (
        <div className="faq">
            <h1>FAQ's</h1>
            <QA showDown = {true} question={"What is Your Name"} answer={content}></QA>
            <QA  question={"What is Your Name"} answer={content}></QA>
            <QA  question={"What is Your Name"} answer={content}></QA>
            <QA  question={"What is Your Name"} answer={content}></QA>
            <button className="bttn">Host With Us</button>
        </div>
    )
}

export default FAQ
