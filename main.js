// var users =[
//  {
//     id : 1,
//     name :'Kim',
// },
// {
//     id : 2,
//     name :'admin'
// },
// {
//     id : 3,
//     name :'Hùng'
// }];

// var comments = [
//     {
//         id: 1,
//         user_id:1,
//         content:'Chưa ra video'
//     },
//     {
//         id: 2,
//         user_id:2,
//         content:'chuẩn bị ra video'
//     },
//     {
//         id: 3,
//         user_id:1,
//         content:'Cảm ơn a'
//     }
// ];

//1. lấy conmmets
//2. từ commmet lấy ra user_id
//3. từ user_id lấy ra user tương ứng


// Fake API
//1. Array
//2. funtion, callback
// 3. Promise
// 4. DOM
function getCommments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000);
    });
}

function getUsersByids(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id);
        });
        setTimeout(function() {
            resolve(result);
        }, 1000);
    }, 1000);
}
// callback hell
//promise hell
//Asyns/Await
getCommments()
    .then(function(comments) {
       var userIds =  comments.map(function(comments) {
        return comments.user_id;
       });
      return getUsersByids(userIds)
            .then(function(users) {
                return {
                    users:users,
                    comments: comments,
                };
         });
   })

   .then(function(data) {
    
    var commentBlock = document.getElementById('comment-block');
     
    var html ='';

    data.comments.forEach(function(comment) {
        var user = data.users.find(function(user){
            return user.id === comment.user_id;
        });

        html +=`<li>${user.name}: ${comment.content}</li>`;
    });

    commentBlock.innerHTML = html;

   });

