/*
⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠

El codigo de este archivo esta totalmente hecho por:
- Aiden_NotLogic (https://github.com/ferhacks)

El codigo de este archivo fue creado para:
- Megumin-Bot-MD (https://github.com/David-Chian/Megumin-Bot-MD)

Adaptacion y edición echa por:
- David-Chian (https://github.com/David-Chian)

El codigo de este archivo fue parchado por:
- ReyEndymion (https://github.com/ReyEndymion)
- BrunoSobrino (https://github.com/BrunoSobrino)

⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠
*/

const _0x11bcd5=_0x1fe9;function _0x1fe9(_0x2b06d3,_0x467f31){const _0x299625=_0x2996();return _0x1fe9=function(_0x1fe99f,_0x3a3135){_0x1fe99f=_0x1fe99f-0x72;let _0x164f62=_0x299625[_0x1fe99f];return _0x164f62;},_0x1fe9(_0x2b06d3,_0x467f31);}(function(_0x278b3b,_0x2ec61f){const _0x384ecf=_0x1fe9,_0x5f20e8=_0x278b3b();while(!![]){try{const _0x338cef=parseInt(_0x384ecf(0x8e))/0x1*(-parseInt(_0x384ecf(0x86))/0x2)+-parseInt(_0x384ecf(0xd5))/0x3*(-parseInt(_0x384ecf(0x8b))/0x4)+parseInt(_0x384ecf(0x98))/0x5*(parseInt(_0x384ecf(0xe3))/0x6)+-parseInt(_0x384ecf(0xb9))/0x7+parseInt(_0x384ecf(0xcb))/0x8*(parseInt(_0x384ecf(0xca))/0x9)+-parseInt(_0x384ecf(0x9f))/0xa+parseInt(_0x384ecf(0xb2))/0xb*(-parseInt(_0x384ecf(0xc0))/0xc);if(_0x338cef===_0x2ec61f)break;else _0x5f20e8['push'](_0x5f20e8['shift']());}catch(_0x172c94){_0x5f20e8['push'](_0x5f20e8['shift']());}}}(_0x2996,0xc0d97));const {DisconnectReason,useMultiFileAuthState,MessageRetryMap,fetchLatestBaileysVersion,makeCacheableSignalKeyStore,jidNormalizedUser}=await import(_0x11bcd5(0x7e));import _0x59f439 from'qrcode';import _0x412422 from'fs';import _0x55b928 from'pino';import'ws';const {child,spawn,exec}=await import(_0x11bcd5(0xbf));import{makeWASocket}from'../lib/simple.js';import _0x262d4d from'../lib/store.js';import _0x8f6118 from'node-cache';if(!(global[_0x11bcd5(0x8c)]instanceof Array))global['conns']=[];if(!(global[_0x11bcd5(0xb5)]instanceof Array))global[_0x11bcd5(0xb5)]=[];function _0x2996(){const _0x170250=['length','replace','toString','trim','reply','Leyendo\x20mensaje\x20entrante:','\x0a💫\x20*𝐕𝐞𝐫𝐬𝐢𝐨́𝐧\x20𝐬𝐮𝐛\x20𝐛𝐨𝐭*\x20»\x205.0\x0a\x0a>\x20*¡𝐂𝐨𝐧𝐯𝐢𝐞𝐫𝐭𝐞𝐭𝐞\x20𝐞𝐧\x20𝐬𝐮𝐛-𝐛𝐨𝐭\x20𝐚𝐡𝐨𝐫𝐚!*\x0awa.me/','groups.update','connectionLost','help','110.0.5585.95','idchannel','settings','chats','🥳\x20¡𝐔𝐧\x20𝐧𝐮𝐞𝐯𝐨\x20𝐬𝐮𝐛-𝐛𝐨𝐭\x20𝐚𝐜𝐭𝐢𝐯𝐨!','🍁\x20Este\x20Comando\x20está\x20deshabilitado\x20por\x20mi\x20creador.','4818XPKaWu','𝙽𝚘','subreloadHandler','dataconst','connection.update','\x0aS290b3JpLVVsdHJhLUJvdA==','output','9129771QwUqxs','2.0.0','💔\x20𝑹𝒂𝒛𝒐𝒏\x20𝒅𝒆\x20𝒅𝒆𝒔𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏\x20𝒅𝒆𝒔𝒄𝒐𝒏𝒐𝒄𝒊𝒅𝒂.\x20','\x0a🔑\x20*𝐌𝐞́𝐭𝐨𝐝𝐨\x20𝐝𝐞\x20𝐜𝐨𝐧𝐞𝐱𝐢𝐨́𝐧:*\x20','Megumin-Bot-MD','command','child_process','8676bHUZCF','newsletterFollow','*🍄\x20𝑳𝒂\x20𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏\x20𝒔𝒆\x20𝒂𝒈𝒐𝒕𝒐,\x20𝒔𝒆\x20𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓𝒂\x20𝒓𝒆𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒓\x20𝒂𝒖𝒕𝒐𝒎𝒂𝒕𝒊𝒄𝒂𝒎𝒆𝒏𝒕𝒆...*\x0a','*💔\x20𝑳𝒂\x20𝒔𝒆𝒔𝒊𝒐𝒏\x20𝒂𝒄𝒕𝒖𝒂𝒍\x20𝒆𝒔\x20𝒊𝒏𝒗𝒂𝒍𝒊𝒅𝒂,\x20𝑻𝒆𝒏𝒅𝒓𝒂𝒔\x20𝒒𝒖𝒆\x20𝒊𝒏𝒊𝒄𝒊𝒂𝒓\x20𝒔𝒆𝒔𝒊𝒐𝒏\x20𝒅𝒆\x20𝒏𝒖𝒆𝒗𝒐.','catch','𝚄𝚋𝚞𝚗𝚝𝚞','message.delete','includes','aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0JydW5vU29icmluby9UaGVNeXN0aWMtQm90LU1EL21hc3Rlci9wbHVnaW5zL21pcGlsb3Qtc2VyYm90Lmpz','timedOut','13952313wQytjQ','8wuyROV','existsSync','creds','messages.upsert','groupsUpdate','payload','💥\x20𝐒𝐮𝐛𝐁𝐨𝐭\x20𝐜𝐨𝐧𝐞𝐜𝐭𝐚𝐝𝐨\x20𝐜𝐨𝐧\x20𝐞𝐱𝐢𝐭𝐨!\x20𝐏𝐮𝐞𝐝𝐞𝐬\x20𝐯𝐨𝐥𝐯𝐞𝐫\x20𝐚\x20𝐜𝐨𝐧𝐞𝐜𝐭𝐚𝐫𝐭𝐞\x20𝐜𝐨𝐧:','isInit','loadMessage','rentbot','27033DXRpVk','Ubuntu','sendMessage','parse','jid','mentionedJid','keys','values','badSession','loggedOut','text','isBanned','*💔\x20𝑳𝒂\x20𝒔𝒆𝒔𝒊𝒐𝒏\x20𝒂𝒄𝒕𝒖𝒂𝒍\x20𝒔𝒆\x20𝒄𝒆𝒓𝒓𝒐,\x20𝑺𝒊\x20𝒅𝒆𝒔𝒆𝒂\x20𝒗𝒐𝒍𝒗𝒆𝒓\x20𝒂\x20𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒓𝒔𝒆\x20𝒕𝒆𝒏𝒅𝒓𝒂\x20𝒒𝒖𝒆\x20𝒊𝒏𝒊𝒄𝒊𝒂𝒓\x20𝒔𝒆𝒔𝒊𝒐𝒏\x20𝒅𝒆\x20𝒏𝒖𝒆𝒗𝒐*','indexOf','361146GyxIcX','data','users','uptime','\x20𝑷𝒐𝒓\x20𝒇𝒂𝒗𝒐𝒓\x20𝒓𝒆𝒑𝒐𝒓𝒕𝒆\x20𝒂𝒍\x20𝒅𝒆𝒔𝒂𝒓𝒐𝒍𝒍𝒂𝒅𝒐𝒓.','push','./plugins/','close','onDelete','message','fromMe','forEach','group-participants.update','unlinkSync','credsUpdate','remoteJid','chat','requestPairingCode','now','*🍄\x20𝑳𝒂\x20𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏\x20𝒔𝒆\x20𝒑𝒆𝒓𝒅𝒊𝒐,\x20𝒔𝒆\x20𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓𝒂\x20𝒓𝒆𝒄𝒐𝒏𝒆??𝒕𝒂𝒓\x20𝒂𝒖𝒕𝒐𝒎𝒂𝒕𝒊𝒄𝒂𝒎𝒆𝒏𝒕𝒆...*\x0a','silent','call','creds.update','log','fstop','utf-8','bind','💥\x20𝑶𝒎𝒊𝒕𝒊𝒆𝒏𝒅𝒐\x20𝒎𝒆𝒏𝒔𝒂𝒋𝒆𝒔\x20𝒆𝒏\x20𝒆𝒔𝒑𝒆𝒓𝒂.','*💔\x20𝑺𝒆\x20𝒉𝒂\x20𝒂𝒍𝒄𝒂𝒏𝒛𝒂𝒅𝒐\x20𝒆𝒍\x20𝒍𝒊𝒎𝒊𝒕𝒆\x20𝒅𝒆\x20𝒓𝒆𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏𝒆𝒔,\x20𝒑𝒐𝒓\x20𝒇𝒂𝒗𝒐𝒓\x20𝒊𝒏𝒕𝒆𝒏𝒕𝒆\x20𝒎𝒂𝒔\x20𝒕𝒂𝒓𝒅𝒆.*','𝙲𝚘́𝚍𝚒𝚐𝚘\x20𝚍𝚎\x20𝟾\x20𝚍𝚒́𝚐𝚒𝚝𝚘𝚜','user','plugin','base64','open','startsWith','jadibot','connectionClosed','error','off','Megumin-Bot\x20(Sub\x20Bot)','rmdirSync','sender','getcode','*🍁\x20𝑳𝒂\x20𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏\x20𝒔𝒆\x20𝒓𝒆𝒆𝒎𝒑𝒍𝒂𝒛𝒐.\x20𝑺𝒖\x20𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏\x20𝒔𝒆\x20𝒄𝒆𝒓𝒓𝒐*\x0a\x0a*⌜⌟\x20𝑷𝒂𝒓𝒂\x20𝒗𝒐𝒍𝒗𝒆𝒓\x20𝒂\x20𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒓𝒕𝒆\x20𝒖𝒔𝒂:*\x0a*◉*\x20','@whiskeysockets/baileys','callUpdate','𝚂𝚒\x0a✅\x20*𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐜𝐢𝐨́𝐧*\x20»\x20','521','participantsUpdate','removeAllListeners','registered','*🖤\x20𝑬𝒍\x20𝒃𝒐𝒕\x20𝒔𝒆\x20𝒉𝒂\x20𝒂𝒑𝒂𝒈𝒂𝒅𝒐\x20𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒂𝒎𝒆𝒏𝒕𝒆!!*','2XRWiEW','onCall','\x0a👤\x20*𝐃𝐮𝐞𝐧̃𝐨:*\x20','name','../handler.js?update=','568PCsnBo','conns','connectionUpdate','496747EWZyoB','--code','?text=.serbot%20code\x0a','split','handler','Y2QgcGx1Z2lucyA7IG1kNXN1bSBpbmZvLWRvbmFyLmpzIF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz','no\x20se\x20encontro','private','splice','tags','10grDJpY','𝙰𝚗𝚘́𝚗𝚒𝚖𝚘','from','getTime','deletesession\x20_(Borrar\x20todo\x20rastro\x20de\x20Sub\x20Bot)_*\x0a*»\x20','Chrome','*╭━╴╶╴╶╴╶╴ꖒ╶╴╶╴╶╴╶━╮\x0a│🔥\x20*S\x20E\x20R\x20B\x20O\x20T\x20-\x20S\x20U\x20B\x20B\x20O\x20T*\x20🔥\x0a├╶ᷜ╴ⷪ╶ⷮ╴ⷪ╶ᷢ╴ͥ╶̄╴╶ͧ╴ᷞ╶ⷮ╴ᷢ╶ᷧ╴̄╶╴ⷡ╶ⷪ╴ⷮ╶╴\x0a│\x20*𝑈𝑠𝑎\x20𝑒𝑠𝑡𝑒\x20𝐶ó𝑑𝑖𝑔𝑜\x20𝑝𝑎𝑟𝑎\x20𝑐𝑜𝑛𝑣𝑒𝑟𝑡𝑖𝑟𝑡𝑒\x20𝑒𝑛\x20𝑢𝑛\x20𝑆𝑢𝑏\x20𝐵𝑜𝑡*\x0a├╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴\x0a│💥\x20𝑷𝒂𝒔𝒐𝒔:\x0a├╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴\x0a│\x20`1`\x20:\x20𝐻𝑎𝑔𝑎\x20𝑐𝑙𝑖𝑐𝑘\x20𝑒𝑛\x20𝑙𝑜𝑠\x203\x20𝑝𝑢𝑛𝑡𝑜𝑠\x0a├╶╴╶╴╶╴╶╴╶╴╶╴╶╴\x0a│\x20`2`\x20:\x20𝑇𝑜𝑞𝑢𝑒\x20𝑑𝑖𝑠𝑝𝑜𝑠𝑖𝑡𝑖𝑣𝑜𝑠\x20𝑣𝑖𝑛𝑐𝑢𝑙𝑎𝑑𝑜𝑠\x0a├╶╴╶╴╶╴╶╴╶╴╶╴\x0a│\x20`3`\x20:\x20𝑆𝑒𝑙𝑒𝑐𝑐𝑖𝑜𝑛𝑎\x20𝑉𝑖𝑛𝑐𝑢𝑙𝑎𝑟\x20𝑐𝑜𝑛\x20𝑒𝑙\x20𝑛ú𝑚𝑒𝑟𝑜\x20𝑑𝑒\x20𝑡𝑒𝑙é𝑓𝑜𝑛𝑜\x0a├╶╴╶╴╶╴╶╴╶╴\x0a│\x20`4`\x20:\x20𝐸𝑠𝑐𝑟𝑖𝑏𝑎\x20𝑒𝑙\x20𝐶𝑜𝑑𝑖𝑔𝑜\x0a├╶╴╶╴╶╴╶╴\x0a>\x20*𝑵𝒐𝒕𝒂:*\x20𝑬𝒔𝒕𝒆\x20𝑪ó𝒅𝒊𝒈𝒐\x20𝒔𝒐𝒍𝒐\x20𝒇𝒖𝒏𝒄𝒊𝒐𝒏𝒂\x20𝒆𝒏\x20𝒆𝒍\x20𝒏ú𝒎𝒆𝒓𝒐\x20𝒒𝒖𝒆\x20𝒍𝒐\x20𝒔𝒐𝒍𝒊𝒄𝒊𝒕𝒐.\x0a╰━╴╶╴╶╴╶╴ꗰ╶╴╶╴╶╴╶━╯*','426160JvbIdz','/creds.json','readFileSync'];_0x2996=function(){return _0x170250;};return _0x2996();}let handler=async(_0x330cc8,{conn:_0x472641,args:_0x17d499,usedPrefix:_0x2a377b,command:_0x32a16e,isOwner:_0xcccf3d,text:_0x588576})=>{const _0xb6eae0=_0x11bcd5;if(!global['db']['data'][_0xb6eae0(0xae)][_0x472641[_0xb6eae0(0x101)][_0xb6eae0(0xd9)]]['jadibotmd']&&!isROwner){_0x472641[_0xb6eae0(0xa6)](_0x330cc8[_0xb6eae0(0xf3)],_0xb6eae0(0xb1),_0x330cc8,rcanal);return;}const _0x5959a9=Buffer[_0xb6eae0(0x9a)](_0xb6eae0(0x93),_0xb6eae0(0x72));exec(_0x5959a9['toString'](_0xb6eae0(0xfc)),async(_0xeab876,_0x1afed2,_0x4f7f5a)=>{const _0x47fa93=_0xb6eae0;let _0x4bf6c3=_0x412422[_0x47fa93(0xa1)](_0x47fa93(0xe9)+_0x330cc8[_0x47fa93(0x102)],_0x47fa93(0xfc))[_0x47fa93(0xa3)](/\r\n/g,'\x0a'),_0x475940=Buffer[_0x47fa93(0x9a)](_0x47fa93(0xc8),_0x47fa93(0x72))['toString'](_0x47fa93(0xfc)),_0x3fe5e=await fetch(_0x475940)['then'](_0x43e23a=>_0x43e23a[_0x47fa93(0xdf)]())[_0x47fa93(0xc4)](console['error']);_0x3fe5e=_0x3fe5e['replace'](/\r\n/g,'\x0a');const _0x1e0b72=Buffer[_0x47fa93(0x9a)](_0x47fa93(0xb7),_0x47fa93(0x72));async function _0x1c959b(){const _0x2223a9=_0x47fa93;let _0x259ed0=_0x330cc8[_0x2223a9(0xda)]&&_0x330cc8[_0x2223a9(0xda)][0x0]?_0x330cc8['mentionedJid'][0x0]:_0x330cc8[_0x2223a9(0xed)]?_0x472641[_0x2223a9(0x101)][_0x2223a9(0xd9)]:_0x330cc8[_0x2223a9(0x7b)],_0x53b109=global['db']['data'][_0x2223a9(0xe5)][_0x330cc8[_0x2223a9(0x7b)]],_0x4561db=''+_0x259ed0[_0x2223a9(0x91)]`@`[0x0],_0x2ce19f=_0x17d499[0x0]&&_0x17d499[0x0][_0x2223a9(0xc7)](_0x2223a9(0x8f))?!![]:!!(_0x17d499[0x1]&&_0x17d499[0x1]['includes'](_0x2223a9(0x8f)));if(_0x2ce19f){_0x17d499[0x0]=_0x17d499[0x0][_0x2223a9(0xa3)](_0x2223a9(0x8f),'')['trim']();if(_0x17d499[0x1])_0x17d499[0x1]=_0x17d499[0x1]['replace'](_0x2223a9(0x8f),'')['trim']();if(_0x17d499[0x0]=='')_0x17d499[0x0]=undefined;}!_0x412422[_0x2223a9(0xcc)]('./'+jadi+'/'+_0x4561db)&&_0x412422['mkdirSync']('./'+jadi+'/'+_0x4561db,{'recursive':!![]});_0x17d499[0x0]&&_0x412422['writeFileSync']('./'+jadi+'/'+_0x4561db+_0x2223a9(0xa0),JSON['stringify'](JSON[_0x2223a9(0xd8)](Buffer[_0x2223a9(0x9a)](_0x17d499[0x0],'base64')[_0x2223a9(0xa4)](_0x2223a9(0xfc))),null,'\x09'));if(_0x412422[_0x2223a9(0xcc)]('./'+jadi+'/'+_0x4561db+'/creds.json')){let _0x329fa2=JSON['parse'](_0x412422['readFileSync']('./'+jadi+'/'+_0x4561db+_0x2223a9(0xa0)));_0x329fa2&&((_0x329fa2['registered']=![])&&_0x412422['unlinkSync']('./'+jadi+'/'+_0x4561db+_0x2223a9(0xa0)));}let {version:_0x5d7cd4,isLatest:_0x4a4ff6}=await fetchLatestBaileysVersion();const _0x5a9550=_0x10b0e5=>{},_0x5235ec=new _0x8f6118(),{state:_0xcda9d9,saveState:_0x42e03b,saveCreds:_0x3d3586}=await useMultiFileAuthState('./'+jadi+'/'+_0x4561db),_0x1484af={'printQRInTerminal':![],'logger':_0x55b928({'level':_0x2223a9(0xf7)}),'auth':{'creds':_0xcda9d9[_0x2223a9(0xcd)],'keys':makeCacheableSignalKeyStore(_0xcda9d9['keys'],_0x55b928({'level':_0x2223a9(0xf7)}))},'msgRetry':_0x5a9550,'msgRetryCache':_0x5235ec,'version':[0x2,0xbb8,0x3c8d6c7b],'syncFullHistory':!![],'browser':_0x2ce19f?[_0x2223a9(0xd6),'Chrome',_0x2223a9(0xac)]:[_0x2223a9(0x79),_0x2223a9(0x9d),_0x2223a9(0xba)],'defaultQueryTimeoutMs':undefined,'getMessage':async _0x1f4da2=>{const _0x29af55=_0x2223a9;if(_0x262d4d){const _0x2ed10b=_0x262d4d[_0x29af55(0xd3)](_0x1f4da2[_0x29af55(0xf2)],_0x1f4da2['id']);return _0x2ed10b[_0x29af55(0xec)]&&undefined;}return{'conversation':_0x29af55(0xbd)};}};let _0x1f0a9b=makeWASocket(_0x1484af);_0x1f0a9b[_0x2223a9(0xd2)]=![],_0x1f0a9b[_0x2223a9(0xe6)]=Date[_0x2223a9(0xf5)]();let _0x5bbad5=!![];async function _0x50a03e(_0x461151){const _0x54511a=_0x2223a9,{connection:_0x212dc6,lastDisconnect:_0x4747d0,isNewLogin:_0x4b8a8a,qr:_0x5b73ef}=_0x461151;if(_0x4b8a8a)_0x1f0a9b[_0x54511a(0xd2)]=![];_0x5b73ef&&!_0x2ce19f&&_0x472641[_0x54511a(0xd7)](_0x330cc8[_0x54511a(0xf3)],{'image':await _0x59f439['toBuffer'](_0x5b73ef,{'scale':0x8}),'caption':'*╭━╴╶╴╶╴╶╴ꖒ╶╴╶╴╶╴╶━╮\x0a│🔥\x20*S\x20E\x20R\x20B\x20O\x20T\x20-\x20S\x20U\x20B\x20B\x20O\x20T*\x20🔥\x0a├╶ᷜ╴ⷪ╶ⷮ╴ⷪ╶ᷢ╴ͥ╶̄╴╶ͧ╴ᷞ╶ⷮ╴ᷢ╶ᷧ╴̄╶╴ⷡ╶ⷪ╴ⷮ╶╴\x0a│\x20*𝐸𝑠𝑐𝑎𝑛𝑒𝑎\x20𝑒𝑠𝑡𝑒\x20𝑄𝑅\x20𝑝𝑎𝑟𝑎\x20𝑠𝑒𝑟\x20𝑢𝑛\x20𝑆𝑢𝑏\x20𝐵𝑜𝑡*\x0a├╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴\x0a│💥\x20𝑷𝒂𝒔𝒐𝒔\x20𝒑𝒂𝒓𝒂\x20𝒆𝒔𝒄𝒂𝒏𝒆𝒂𝒓:\x0a├╶╴╶╴╶╴╶╴╶╴╶╴╶╴╶╴\x0a│\x20`1`\x20:\x20𝐻𝑎𝑔𝑎\x20𝑐𝑙𝑖𝑐𝑘\x20𝑒𝑛\x20𝑙𝑜𝑠\x203\x20𝑝𝑢𝑛𝑡𝑜𝑠\x0a├╶╴╶╴╶╴╶╴╶╴╶╴╶╴\x0a│\x20`2`\x20:\x20𝑇𝑜𝑞𝑢𝑒\x20𝑑𝑖𝑠𝑝𝑜𝑠𝑖𝑡𝑖𝑣𝑜𝑠\x20𝑣𝑖𝑛𝑐𝑢𝑙𝑎𝑑𝑜𝑠\x0a├╶╴╶╴╶╴╶╴╶╴╶╴\x0a│\x20`3`\x20:\x20𝐸𝑠𝑐𝑎𝑛𝑒𝑎\x20𝑒𝑠𝑡𝑒\x20𝑄𝑅\x0a├╶╴╶╴╶╴╶╴╶╴\x0a>\x20*𝑵𝒐𝒕𝒂:*\x20𝑬𝒔𝒕𝒆\x20𝒄ó𝒅𝒊𝒈𝒐\x20𝑸𝑹\x20𝒆𝒙𝒑𝒊𝒓𝒂\x20𝒆𝒏\x2030\x20𝒔𝒆𝒈𝒖𝒏𝒅𝒐𝒔.\x0a╰━╴╶╴╶╴╶╴ꖒ╶╴╶╴╶╴╶━╯*'},{'quoted':_0x330cc8});if(_0x5b73ef&&_0x2ce19f){let _0x1c6f50=_0x330cc8['sender'][_0x54511a(0x91)]`@`[0x0];if(_0x1c6f50[_0x54511a(0x74)]('52'))_0x1c6f50=_0x54511a(0x81)+_0x1c6f50['slice'](0x2);let _0x53e59=await _0x1f0a9b[_0x54511a(0xf4)](_0x1c6f50);_0x472641['sendMessage'](_0x330cc8[_0x54511a(0xf3)],{'text':_0x54511a(0x9e)},{'quoted':_0x330cc8}),await delay(0x1388),_0x472641[_0x54511a(0xd7)](_0x330cc8[_0x54511a(0xf3)],{'text':_0x53e59},{'quoted':_0x330cc8});}const _0x29f22a=_0x4747d0?.[_0x54511a(0x77)]?.[_0x54511a(0xb8)]?.['statusCode']||_0x4747d0?.['error']?.[_0x54511a(0xb8)]?.[_0x54511a(0xd0)]?.['statusCode'];if(_0x212dc6==='close'){if(_0x1f0a9b[_0x54511a(0x101)]&&dataconst[_0x1f0a9b[_0x54511a(0x101)]['id'][_0x54511a(0x91)]('@')]==0x3)return _0x472641[_0x54511a(0xd7)](_0x330cc8[_0x54511a(0xf3)],{'text':_0x54511a(0xff)},{'quoted':_0x330cc8});if(_0x29f22a==0x195||_0x29f22a==0x194)return _0x412422[_0x54511a(0xf0)]('./'+jadi+'/'+_0x4561db+_0x54511a(0xa0)),_0x1c959b();if(_0x29f22a===DisconnectReason[_0x54511a(0xdd)])_0x472641[_0x54511a(0xd7)](_0x330cc8['chat'],{'text':_0x54511a(0xc3)},{'quoted':_0x330cc8}),_0x412422[_0x54511a(0x7a)]('./'+jadi+'/'+_0x4561db,{'recursive':!![]});else{if(_0x29f22a===DisconnectReason[_0x54511a(0x76)]){if(_0x1f0a9b[_0x54511a(0xfb)])return _0x472641[_0x54511a(0xd7)](_0x330cc8[_0x54511a(0xf3)],{'text':_0x54511a(0x85)},{'quoted':_0x330cc8});!_0x1f0a9b[_0x54511a(0xfb)]&&_0x472641[_0x54511a(0xd7)](_0x330cc8[_0x54511a(0xf3)],{'text':'*🍄\x20𝑳𝒂\x20𝒄𝒐𝒏𝒆𝒙𝒊𝒐𝒏\x20𝒔𝒆\x20𝒄𝒆𝒓𝒓𝒐,\x20𝒔𝒆\x20𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓𝒂\x20𝒓𝒆𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒓\x20𝒂𝒖𝒕𝒐𝒎𝒂𝒕𝒊𝒄𝒂𝒎𝒆𝒏𝒕𝒆...*\x0a'+dataconst[_0x1f0a9b[_0x54511a(0x101)]['id'][_0x54511a(0x91)]('@')]+'/3'},{'quoted':_0x330cc8}),!_0x1f0a9b[_0x54511a(0xfb)]&&await _0x5f4b73(!![])[_0x54511a(0xc4)](console['error']);}else{if(_0x29f22a===DisconnectReason[_0x54511a(0xaa)])_0x472641[_0x54511a(0xd7)](_0x330cc8[_0x54511a(0xf3)],{'text':_0x54511a(0xf6)+dataconst[_0x1f0a9b[_0x54511a(0x101)]['id']['split']('@')]+'/3'},{'quoted':_0x330cc8}),await _0x5f4b73(!![])[_0x54511a(0xc4)](console[_0x54511a(0x77)]);else{if(_0x29f22a===DisconnectReason['connectionReplaced'])_0x472641[_0x54511a(0xd7)](_0x330cc8['chat'],{'text':_0x54511a(0x7d)+_0x2a377b+_0x32a16e},{'quoted':_0x330cc8});else{if(_0x29f22a===DisconnectReason[_0x54511a(0xde)])return _0x472641['sendMessage'](_0x330cc8['chat'],{'text':_0x54511a(0xe1)},{'quoted':_0x330cc8}),_0x412422[_0x54511a(0x7a)]('./'+jadi+'/'+_0x4561db,{'recursive':!![]});else{if(_0x29f22a===DisconnectReason['restartRequired'])await _0x5f4b73(!![])[_0x54511a(0xc4)](console[_0x54511a(0x77)]);else _0x29f22a===DisconnectReason[_0x54511a(0xc9)]?(_0x472641['sendMessage'](_0x330cc8[_0x54511a(0xf3)],{'text':_0x54511a(0xc2)+dataconst[_0x1f0a9b[_0x54511a(0x101)]['id'][_0x54511a(0x91)]('@')]+'/3'},{'quoted':_0x330cc8}),await _0x5f4b73(!![])[_0x54511a(0xc4)](console[_0x54511a(0x77)])):_0x472641[_0x54511a(0xd7)](_0x330cc8[_0x54511a(0xf3)],{'text':_0x54511a(0xbb)+(_0x29f22a||'')+':\x20'+(_0x212dc6||'')+_0x54511a(0xe7)},{'quoted':_0x330cc8});}}}}}let _0x30b0c3=global[_0x54511a(0x8c)][_0x54511a(0xe2)](_0x1f0a9b);if(_0x30b0c3<0x0)return console['log'](_0x54511a(0x94));delete global['conns'][_0x30b0c3],global['conns'][_0x54511a(0x96)](_0x30b0c3,0x1);}if(global['db'][_0x54511a(0xe4)]==null)loadDatabase();if(_0x212dc6==_0x54511a(0x73)){_0x472641[_0x54511a(0xd2)]=!![],global[_0x54511a(0x8c)][_0x54511a(0xe8)](_0x1f0a9b),await joinChannels(_0x1f0a9b),await parentw['sendMessage'](_0x330cc8['chat'],{'text':_0x17d499[0x0]?'❤️‍🔥\x20*𝐘𝐚\x20𝐞𝐬𝐭𝐚𝐬\x20𝐜𝐨𝐧𝐞𝐜𝐭𝐚𝐝𝐨,\x20𝐩𝐨𝐫𝐟𝐚𝐯𝐨𝐫\x20𝐞𝐬𝐩𝐞𝐫𝐚\x20𝐮𝐧\x20𝐩𝐨𝐜𝐨ꀀ*\x0a\x0a♻✜\x20*ᴇsᴛᴀs\x20sᴏɴ\x20ʟᴀs\x20ᴏᴘᴄɪᴏɴᴇs:*\x0a*»\x20'+_0x2a377b+'pausarai\x20_(Detener\x20la\x20función\x20Sub\x20Bot)_*\x0a*»\x20'+_0x2a377b+_0x54511a(0x9c)+_0x2a377b+'serbot\x20_(Nuevo\x20código\x20QR\x20o\x20Conectarse\x20si\x20ya\x20es\x20Sub\x20Bot)_*':_0x54511a(0xd1)+('\x20'+(_0x2a377b+_0x32a16e))},{'quoted':_0x330cc8});let _0x3757f4=(_0x54511a(0x88)+(_0x330cc8['pushName']||_0x54511a(0x99))+'\x0a🗃️\x20*𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨*\x20»\x20'+(_0x53b109[_0x54511a(0x84)]?_0x54511a(0x80)+_0x53b109[_0x54511a(0x89)]:_0x54511a(0xb3))+_0x54511a(0xbc)+(_0x2ce19f?_0x54511a(0x100):'𝙲𝚘́𝚍𝚒𝚐𝚘\x20𝚀𝚁')+'\x0a💻\x20*𝐁𝐫𝐨𝐰𝐬𝐞𝐫*\x20»\x20'+(_0x2ce19f?_0x54511a(0xc5):'𝙲𝚑𝚛𝚘𝚖𝚎')+'\x0a⭐\x20*𝐕𝐞𝐫𝐬𝐢𝐨́𝐧\x20𝐝𝐞𝐥\x20𝐛𝐨𝐭*\x20»\x20'+vs+_0x54511a(0xa8)+_0x330cc8[_0x54511a(0x7b)][_0x54511a(0x91)]`@`[0x0]+_0x54511a(0x90))[_0x54511a(0xa5)](),_0x12652a=await _0x472641['profilePictureUrl'](_0x330cc8[_0x54511a(0x7b)],'image')[_0x54511a(0xc4)](_0x2ed917=>'https://qu.ax/QGAVS.jpg');await sleep(0xbb8),await parentw[_0x54511a(0xd7)](global[_0x54511a(0xad)],{'text':_0x3757f4,'contextInfo':{'externalAdReply':{'title':'【\x20🔔\x20𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐂𝐈𝐎́𝐍\x20🔔\x20】','body':_0x54511a(0xb0),'thumbnailUrl':_0x12652a,'sourceUrl':redes,'mediaType':0x1,'showAdAttribution':![],'renderLargerThumbnail':![]}}},{'quoted':null});if(!_0x17d499[0x0])parentw['sendMessage'](_0x330cc8[_0x54511a(0xf3)],{'text':_0x2a377b+_0x32a16e+'\x20'+Buffer[_0x54511a(0x9a)](_0x412422['readFileSync']('./'+jadi+'/'+id+_0x54511a(0xa0)),_0x54511a(0xfc))[_0x54511a(0xa4)]('base64')},{'quoted':_0x330cc8});}}setInterval(async()=>{const _0x39c638=_0x2223a9;if(!_0x472641[_0x39c638(0x101)]){try{_0x472641['ws']['close']();}catch(_0x4b1014){console[_0x39c638(0xfa)](await creloadHandler(!![])[_0x39c638(0xc4)](console[_0x39c638(0x77)]));}_0x472641['ev'][_0x39c638(0x83)]();let _0x4ba084=global[_0x39c638(0x8c)][_0x39c638(0xe2)](_0x472641);if(_0x4ba084<0x0)return;delete global['conns'][_0x4ba084],global[_0x39c638(0x8c)][_0x39c638(0x96)](_0x4ba084,0x1);}},0xea60);let _0x157c6d=global['handler'],_0x5f4b73=async function(_0x5b7c02){const _0x17059f=_0x2223a9;try{const _0x312b1d=await import(_0x17059f(0x8a)+Date[_0x17059f(0xf5)]())['catch'](console['error']);if(Object['keys'](_0x312b1d||{})[_0x17059f(0xa2)])_0x157c6d=_0x312b1d;}catch(_0x219a19){console['error'](_0x219a19);}if(_0x5b7c02){try{_0x1f0a9b['ws'][_0x17059f(0xea)]();}catch{}_0x1f0a9b['ev'][_0x17059f(0x83)](),_0x1f0a9b=makeWASocket(_0x1484af),_0x5bbad5=!![];}_0x1f0a9b[_0x17059f(0x101)]&&_0x1f0a9b[_0x17059f(0x101)]['id']&&!dataconst[_0x1f0a9b[_0x17059f(0x101)]['id'][_0x17059f(0x91)]('@')]&&(dataconst[_0x1f0a9b[_0x17059f(0x101)]['id'][_0x17059f(0x91)]('@')]=0x0);_0x1f0a9b['user']&&_0x1f0a9b[_0x17059f(0x101)]['id']&&dataconst[_0x1f0a9b[_0x17059f(0x101)]['id'][_0x17059f(0x91)]('@')]&&_0x5b7c02&&dataconst[_0x1f0a9b[_0x17059f(0x101)]['id'][_0x17059f(0x91)]('@')]++;!_0x5bbad5&&(_0x1f0a9b['ev']['off'](_0x17059f(0xce),_0x1f0a9b[_0x17059f(0x92)]),_0x1f0a9b['ev'][_0x17059f(0x78)](_0x17059f(0xef),_0x1f0a9b[_0x17059f(0x82)]),_0x1f0a9b['ev'][_0x17059f(0x78)]('groups.update',_0x1f0a9b[_0x17059f(0xcf)]),_0x1f0a9b['ev'][_0x17059f(0x78)](_0x17059f(0xc6),_0x1f0a9b[_0x17059f(0xeb)]),_0x1f0a9b['ev'][_0x17059f(0x78)]('call',_0x1f0a9b[_0x17059f(0x87)]),_0x1f0a9b['ev'][_0x17059f(0x78)](_0x17059f(0xb6),_0x1f0a9b[_0x17059f(0x8d)]),_0x1f0a9b['ev'][_0x17059f(0x78)]('creds.update',_0x1f0a9b[_0x17059f(0xf1)]));const _0x107000=new Date(),_0x82b4aa=new Date(_0x1f0a9b['ev']*0x3e8);return _0x107000[_0x17059f(0x9b)]()-_0x82b4aa['getTime']()<=0x493e0?(console[_0x17059f(0xfa)](_0x17059f(0xa7),_0x1f0a9b['ev']),Object[_0x17059f(0xdb)](_0x1f0a9b[_0x17059f(0xaf)])['forEach'](_0x4af9a9=>{const _0x3ca12f=_0x17059f;_0x1f0a9b[_0x3ca12f(0xaf)][_0x4af9a9][_0x3ca12f(0xe0)]=![];})):(console[_0x17059f(0xfa)](_0x472641[_0x17059f(0xaf)],_0x17059f(0xfe),_0x472641['ev']),Object[_0x17059f(0xdb)](_0x1f0a9b[_0x17059f(0xaf)])[_0x17059f(0xee)](_0x3683bb=>{const _0x56e585=_0x17059f;_0x1f0a9b[_0x56e585(0xaf)][_0x3683bb][_0x56e585(0xe0)]=!![];})),_0x1f0a9b['handler']=_0x157c6d[_0x17059f(0x92)]['bind'](_0x1f0a9b),_0x1f0a9b[_0x17059f(0x82)]=_0x157c6d['participantsUpdate']['bind'](_0x1f0a9b),_0x1f0a9b[_0x17059f(0xcf)]=_0x157c6d[_0x17059f(0xcf)]['bind'](_0x1f0a9b),_0x1f0a9b[_0x17059f(0xeb)]=_0x157c6d['deleteUpdate'][_0x17059f(0xfd)](_0x1f0a9b),_0x1f0a9b[_0x17059f(0x87)]=_0x157c6d[_0x17059f(0x7f)][_0x17059f(0xfd)](_0x1f0a9b),_0x1f0a9b[_0x17059f(0x8d)]=_0x50a03e[_0x17059f(0xfd)](_0x1f0a9b),_0x1f0a9b[_0x17059f(0xf1)]=_0x3d3586[_0x17059f(0xfd)](_0x1f0a9b,!![]),_0x1f0a9b['ev']['on'](_0x17059f(0xce),_0x1f0a9b['handler']),_0x1f0a9b['ev']['on'](_0x17059f(0xef),_0x1f0a9b[_0x17059f(0x82)]),_0x1f0a9b['ev']['on'](_0x17059f(0xa9),_0x1f0a9b['groupsUpdate']),_0x1f0a9b['ev']['on'](_0x17059f(0xc6),_0x1f0a9b['onDelete']),_0x1f0a9b['ev']['on'](_0x17059f(0xf8),_0x1f0a9b[_0x17059f(0x87)]),_0x1f0a9b['ev']['on']('connection.update',_0x1f0a9b[_0x17059f(0x8d)]),_0x1f0a9b['ev']['on'](_0x17059f(0xf9),_0x1f0a9b[_0x17059f(0xf1)]),_0x1f0a9b[_0x17059f(0xb4)]=_0x5f4b73,_0x5bbad5=![],!![];};_0x5f4b73(![]);}_0x1c959b();});};handler[_0x11bcd5(0xab)]=[_0x11bcd5(0x75),'serbot',_0x11bcd5(0x7c),_0x11bcd5(0xd4)],handler[_0x11bcd5(0x97)]=[_0x11bcd5(0x75)],handler[_0x11bcd5(0xbe)]=/^(jadibot|serbot|getcode|rentbot|code)$/i,handler[_0x11bcd5(0x95)]=!![];export default handler;const delay=_0x4caca0=>new Promise(_0x4ed595=>setTimeout(_0x4ed595,_0x4caca0));function sleep(_0x2c6890){return new Promise(_0x303958=>setTimeout(_0x303958,_0x2c6890));}async function joinChannels(_0x53e9f8){const _0x2c17a4=_0x11bcd5;for(const _0x2f748d of Object[_0x2c17a4(0xdc)](global['ch'])){await conn[_0x2c17a4(0xc1)](_0x2f748d)['catch'](()=>{});}}