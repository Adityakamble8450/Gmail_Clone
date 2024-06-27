export const API_URLS = {
    saveEmail :{
        endpoint : "save" ,
        method : "POST"
    },
    getEmailFromType: {
        endpoint: 'emails',
        method: 'GET'
    },
    saveDraftEmails: {
        endpoint: 'save-draft',
        method: 'POST'
    },
    moveEmailsToBin: {
        endpoint: 'bin',
        method: 'POST'
    },
    deleteEmails: {
        endpoint: 'delete',
        method: 'DELETE'
    },
    toggleStarredEmail :{
        endpoint : 'starred',
        method : "POST"
    }
}