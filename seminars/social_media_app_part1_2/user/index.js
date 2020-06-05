function newPost() {
	post = {
		text: getPostText(),
		user: getUser()
	}
	var elem = createPost(post)
	addNewPost(elem)
}

function getPostId() {
	return POSTID++ 
}

function getPostText() {
	var postInputElement = document.getElementById('post_text')
	return postInputElement.value
}

function getUser() {
	var userNameElement = document.getElementById('username')
	return userNameElement.value
}

function createPost(post) {
	return `
		<div class="container">
			<div class="post_title">
				${post.user}
			</div>
			<div class="post_text">
				${post.text}
			</div>
		</div>
	`
}

function addNewPost(elem) {
	var posts = document.getElementById('posts')
	var post = document.createElement('div')
	post.innerHTML = elem
	posts.insertAdjacentElement('afterbegin', post)
}
