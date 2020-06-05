var testConfig = {
	commentInputId: 'comment_input_text',
	newCommentButton: 'new_comment',
	commentsContainerId: 'comments_container',
	commentsFeed: 'comments_feed',
	comment: 'comment_container',
	commentText: 'comment_text'
}
var expect = chai.expect
var assert = chai.assert
class Tester {
	constructor() {
		this.postElem = ''
	}

	createNewPost() {
		const input = document.querySelector(`textarea#post_text`)
		input.value = Math.random()*1000
		const button = document.querySelector(`button#new_post`)
		button.onclick()
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				this.postElem = this.getFirstPost()
				resolve(this.postElem)
			}, 1000)
		})
		
	}

	getPostsFeed() {
		return document.querySelector(`div#posts`)
	}

	getFirstPost() {
		return this.getPostsFeed()
		.querySelector(`div.post`)
	}

	getCommentsFeed() {
		return this.postElem
		.querySelector(`div.${testConfig.commentsFeed}`)
	}

	getPostComments() {
		return this.postElem
		.querySelector(`div.${testConfig.commentsContainerId}`)
	}

	getCommentsInput() {
		return this.getPostComments()
		.querySelector(`textarea.${testConfig.commentInputId}`)
	}

	getCommentButton() {
		return this.getPostComments().querySelector(`button.${testConfig.newCommentButton}`)
	}

	getLastComment() {
		return this.getCommentsFeed()
			.querySelector(`div.${testConfig.commentText}`)
	}
	postComment() {
		const text = Math.random()*100000
		this.getCommentsInput().value = text
		this.getCommentButton().onclick()
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const result = this.getLastComment().innerText
				resolve({
					typed: text,
					result: result
				})
			}, 100)
		})
	}

}

describe(`კომენტარები`, () => {
	const tester = new Tester()
	it(`ელემენტები: პოსტს უნდა ქონდეს კომენტარების ელემენტი, რომლის კლასი 
		არის ${testConfig.commentsContainerId}.

		${commentsContainerId} ელემენტში არსებობს textarea, რომლის კლასი არის 
		${testConfig.commentInputId}.

		${commentsContainerId} ელემენტში არსებობს ღილაკი, რომლის
		კლასი არის ${testConfig.newCommentButton}

		${commentsContainerId} ელემენტში დაპოსტილი კომენტარებისთვის არსებობს div ელემენტი,
		რომლის კლასი არის ${testConfig.commentsFeed}

		`, (done) => {
			tester.createNewPost()
			.then((post) => {
				assert.isNotNull(post)
				assert.isNotNull(tester.getCommentsInput())
				assert.isNotNull(tester.getCommentButton())
				assert.isNotNull(tester.getCommentsFeed())
				done()
			})
		})
	
	it(`ამ ღილაკზე დაჭერის შემდეგ კომენტარის ველში შეყვანილი ტექსტი უნდა 
		დაემატოს კომენტარების ფიდში (დაპოსტილი კომენტარები). 
		თითოეული კომენტარისთვის შექმენით ახალი ელემენტი, რომელსაც ექნება კლასი 
		${testConfig.comment}. აქ შეგიძლიათ სხვადასხვა ელემენტები იყოს. მთავარია, 
		უშუალოდ კომენტარის ტექსტის div-ს ქონდეს კლასი ${testConfig.commentText}`, (done) => {
			tester.createNewPost()
			.then(() => tester.postComment())
			.then((res) => {
				assert.equal(res.typed, res.result)
				done()
			})
		})
})