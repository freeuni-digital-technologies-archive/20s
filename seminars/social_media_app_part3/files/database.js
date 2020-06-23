class DatabaseConnection {
    constructor(collectionName) {
        this.collectionName = collectionName
            // onConnectedFunctions.push(this..onConnected)
        backend.on('connected', () => this.onConnected())
        this.subscribe()
    }

    getMessage(functionName) {
        return `
            change ${functionName} in your .js file to 
            call a custom function when this happens
        `
    }

    onConnected() {
        console.log(`
            connected to backend.
            ${this.getMessage('onConnected')}
        `)
    }

    onNew(obj) {
        console.log(`
            a new object was created in ${this.collectionName}. 
            ${this.getMessage('onNew')}
        `)
    }

    onDelete(obj) {
        console.log(`
            an object was deleted in ${this.collectionName}. 
            ${this.getMessage('onDeleted')}
        `)
    }

    onUpdate(obj) {
        console.log(`
            an object was udpated in ${this.collectionName}. 
            ${this.getMessage('onDeleted')}
        `)
    }

    /**
     * 
     * @param {object} obj 
     */
    create(obj) {
        const items = this.getAll()
        const ids = JSON.parse(localStorage.getItem('ids'))
        const id = ids[this.collectionName] + 1
        ids[this.collectionName] = id
        obj.id = id++ 
        items.push(obj)
        localStorage.setItem('ids', JSON.stringify(ids))
        localStorage.setItem(this.collectionName, JSON.stringify(items))
        this.onNew(obj)
    }

    delete(id) {
        if (typeof(id) !== "number") {
            return console.error("number is needed as an id ", id, " provided instead")
        }
        const items = this.getAll()
        const newItems = items.filter(e => e.id != id)
        localStorage.setItem(this.collectionName, JSON.parse(newItems))
        this.onDelete(id)
    }

    getAll() {
        return JSON.parse(localStorage.getItem(this.collectionName))
    }

    update(obj) {
        if (!obj.id) {
            return console.error('no id provided')
        }
        const items = this.getAll()
        const newItems = items.map(e => e.id === obj.id ? obj : e)
        localStorage.setItem(this.collectionName, JSON.stringify(newItems))
        console.log('udpated item ' + obj.id)

    }

    subscribe() {
        backend.on('connected', () => backend.realtime.subscribe(
            // TODO needs to be ID of the student
            'social-media',
            this.collectionName, {},
            p => {
                if (p.action == "create")
                    this.onNew(this.unwrap(p.result)) //addPost()
                else if (p.action == "delete")
                //TODO    
                    this.onDeleted(p.result._id)
                else
                    console.log(p)
            }))
    }

}