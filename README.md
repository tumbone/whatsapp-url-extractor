# WhatsApp Chat Url Extractor

### System Requirements
- [NodeJs](https://nodejs.org)

## Instructions
1. Clone this repository
2. On a mobile device, open the chat you wish to extract urls from. Open the context menu -> `More -> Export chat`. (You may choose to export the chat "Without Media"). Select an export destination of your choice e.g email, google drive etc,
3. Proceed to download the chat history, exported as a text file, to the root directory of this project cloned in step one. 
4. From inside the project's root directory, run the command: 
```
$ node extract-url.js <exported-chat-file>
```
5. A file named `urls-extracted.txt` is generated as output which includes all the urls found within the chat. 

(Refer to `sample-output.txt` file for an example of the output file generated.) 