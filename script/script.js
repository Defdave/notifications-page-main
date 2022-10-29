
const noticeHeader = document.querySelectorAll('.notice-header')
const noUnread = document.querySelector('.no-unread')

const markAllBtn = document.querySelector('.mark-all-btn')

markAllBtn.addEventListener('click', () => {
    noticeHeader.forEach(notice => {
        notice.classList.remove('unread')
    })
    const yetToRead = document.querySelectorAll('.unread').length

    function noOfNotice() {
        if(yetToRead == 0) {
            noUnread.remove('no-unread')
        }
        else{
            noUnread.innerHTML = yetToRead
        }
        
    }

    noOfNotice()
})








// Discard this it's for another way to create the notification into the DOM i did the practice my skill of using object

// const listNotice = document.querySelector('.list-notice')
// const notices = {
//     post: {
//         userImg: 'assets/images/avatar-mark-webber.webp',
//         text: (name = 'Mark Webber', post_name = 'My first tournament today!') => {
//             let nameEle = document.createElement('span')
//             nameEle.classList.add('d-blue')
//             nameEle.textContent = name

//             let postEle = document.createElement('span')
//             postEle.classList.add('post-name')
//             postEle.textContent = post_name

//             let createMiddleText = document.createTextNode(' reacted to your recent post ')

//             let createText = document.createElement('p')
//             createText.classList.add('text')
//             createText.appendChild(nameEle)
//             createText.appendChild(createMiddleText)
//             createText.appendChild(postEle)

//             return createText
//         },
//         noticeDate: '1m ago'
//     },
//     follows: {
//         userImg: 'assets/images/avatar-angela-gray.webp',
//         text: (name = 'Angela Gray') => {
//             let nameEle = document.createElement('span')
//             nameEle.classList.add('d-blue')
//             nameEle.textContent = name
    
//             let createMiddleText = document.createTextNode(' followed you')
    
//             let createText = document.createElement('p')
//             createText.classList.add('text')
//             createText.appendChild(nameEle)
//             createText.appendChild(createMiddleText)
    
//             return createText
    
//         },
//         noticeDate: '5m ago'
//     }
// }

// console.log(Object.keys(notices));

// Object.keys(notices).forEach((key) => {
//     if(key == 'post') {
//         const createNotice = () => {
//             const craeteList = document.createElement('li')
//             craeteList.classList.add('notice-block')
        
//             const createHeader = document.createElement('div')
//             createHeader.classList.add('notice-header')
        
//             // users image display
//             const createHeaderImg = document.createElement('img')
//             createHeaderImg.classList.add('header-img')
//             createHeaderImg.src = notices.post.userImg
            
//             // Text display
//             const createHeaderText = document.createElement('div')
//             createHeaderText.classList.add('header-text')
//             createHeaderText.appendChild(notices.post.text())
        
//             // Notice Date Deplay
//             const createNoticeDate = document.createElement('span')
//             createNoticeDate.classList.add('notice-date')
//             createNoticeDate.textContent = notices.post.noticeDate
        
//             // appendChild for each of the Element above
        
//             craeteList.appendChild(createHeader)
            
//             createHeader.appendChild(createHeaderImg)
//             createHeader.appendChild(createHeaderText)
        
//             createHeaderText.appendChild(createNoticeDate)
        
//             listNotice.appendChild(craeteList)
//         }
//         createNotice()

//     }
    
//     else if (key == 'follows') {
//         const createNotice = () => {
//             const craeteList = document.createElement('li')
//             craeteList.classList.add('notice-block')
        
//             const createHeader = document.createElement('div')
//             createHeader.classList.add('notice-header')
        
//             // users image display
//             const createHeaderImg = document.createElement('img')
//             createHeaderImg.classList.add('header-img')
//             createHeaderImg.src = notices.follows.userImg
            
//             // Text display
//             const createHeaderText = document.createElement('div')
//             createHeaderText.classList.add('header-text')
//             createHeaderText.appendChild(notices.follows.text())
        
//             // Notice Date Deplay
//             const createNoticeDate = document.createElement('span')
//             createNoticeDate.classList.add('notice-date')
//             createNoticeDate.textContent = notices.follows.noticeDate
        
//             // appendChild for each of the Element above
        
//             craeteList.appendChild(createHeader)
            
//             createHeader.appendChild(createHeaderImg)
//             createHeader.appendChild(createHeaderText)
        
//             createHeaderText.appendChild(createNoticeDate)
        
//             listNotice.appendChild(craeteList)
//         }
//         createNotice()
//     }
    
// })
