export class MessageCollection {
    messages: any[];
    inboxMessages: any[];
    sentMessages: any[];
    inboxMessagesReadCount: number = 0;
    sentMessagesReadCount: number = 0;
    minIndex: number = 0;

    constructor(messages: any[]) {
        this.messages = messages;
        this.setData()
    }

    setData(): void {
        this.inboxMessages = [];
        this.inboxMessagesReadCount = 0;
        this.sentMessages = [];
        this.sentMessagesReadCount = 0;

        this.messages.forEach((message) => {
            if (message.isSentByPatient) {
                if (!message.isRead) {
                    this.inboxMessagesReadCount += 1;
                }
                this.inboxMessages.push(message);
            } else {
                if (!message.isRead) {
                    this.sentMessagesReadCount += 1;
                }
                this.sentMessages.push(message);
            }
        })
    }

    getTotalCount(tab: string): number {
        if(tab === 'inbox') {
            return this.inboxMessages.length;
        }

        return this.sentMessages.length;        
    }

    getActiveMessages(tab: string, max: number, page: number): any[] {

        this.minIndex = page > 1 ? (page - 1) * max - 1 : 0;

        if (tab === 'inbox') {
            return this.inboxMessages.slice(this.minIndex, max);
        }

        return this.sentMessages.slice(this.minIndex, max);
    }

    getInboxMessagesReadCount(): number {
        return this.inboxMessagesReadCount || 0;
    }

    getSentMessagesReadCount(): number {
        return this.sentMessagesReadCount || 0;
    }

}
