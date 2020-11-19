const activities = [
    {
        "id": 1,
        "type": "status",
        "user": "John",
        "content": "check_in",
        "created_at": "2020-06-15 09:10:00"
    },
    {
        "id": 2,
        "type": "status",
        "user": "Johnson",
        "content": "check_in",
        "created_at": "2020-06-15 09:12:00"
    },
    {
        "id": 3,
        "type": "status",
        "user": "Johnny",
        "content": "check_out",
        "created_at": "2020-06-15 09:12:23"
    },
    {
        "id": 4,
        "type": "status",
        "user": "Mandy",
        "content": "away",
        "created_at": "2020-06-15 09:12:25"
    },
    {
        "id": 5,
        "type": "status",
        "user": "Jessica",
        "content": "check_in",
        "created_at": "2020-06-15 09:13:00"
    },
    {
        "id": 6,
        "type": "status",
        "user": "James",
        "content": "check_out",
        "created_at": "2020-06-15 09:16:00"
    },
    {
        "id": 7,
        "type": "status",
        "user": "Hublot",
        "content": "check_in",
        "created_at": "2020-06-15 10:00:00"
    }
];


solution = []

activities.forEach((element1, idx1) => {
    let obj = {
        "type": "status",
        "content": element1.content,
        "firstuser": element1.user,
        "following_user": [],
        "created_at": element1.created_at
    }

    //deciding who will be the following user.
    activities.forEach(element2 => {
        element2time = new Date(element2.created_at).getTime()
        element1time = new Date(element1.created_at).getTime()
        if (element2.content == element1.content && element2.user != obj.firstuser && element2time - element1time < 600000 && element2time > element1time) {
            obj.following_user.push(element2.user)
        }
    });



    //forelse loop replacement for javascript.
    const forelse = () => {
        flag = false
        for (let i = 0; i < solution.length; i++) {
            element1times = new Date(element1.created_at).getTime()
            element3times = new Date(solution[i].created_at).getTime()

            if (element1.content == solution[i].content && element1times - element3times < 600000) {
                flag = true
                break
            }



        }
        if (!flag) {
            solution.push(obj)
        }
    }

    forelse()





});


const finalanswer={"activities":solution}

console.log(finalanswer.activities)



