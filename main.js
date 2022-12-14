fetch('https://api.github.com/users')
.then(res=> res.json())
.then(data=>{console.log(data);
        let i=1
        data.forEach(user => {
            document.getElementById('data').innerHTML += `
            <tr>

                <td>${i}</td>
                <td>
                <img src="${user.avatar_url}" style="width:150px">
                </td>
                <td>${(user.login)}</td>
            </tr>`

            i++
        });
    }).catch(e=> console.log(e))
