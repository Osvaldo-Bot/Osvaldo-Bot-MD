/*
• @David-Chian
- https://github.com/David-Chian
*/

const _0x2cd139=_0x4cf2;(function(_0x33aa48,_0x85d63c){const _0x22eae3=_0x4cf2,_0x3380de=_0x33aa48();while(!![]){try{const _0x5a75c2=-parseInt(_0x22eae3(0x15f))/0x1*(parseInt(_0x22eae3(0x186))/0x2)+-parseInt(_0x22eae3(0x180))/0x3+parseInt(_0x22eae3(0x18b))/0x4+parseInt(_0x22eae3(0x162))/0x5+parseInt(_0x22eae3(0x15a))/0x6+parseInt(_0x22eae3(0x172))/0x7*(-parseInt(_0x22eae3(0x16a))/0x8)+parseInt(_0x22eae3(0x15b))/0x9;if(_0x5a75c2===_0x85d63c)break;else _0x3380de['push'](_0x3380de['shift']());}catch(_0x45af4f){_0x3380de['push'](_0x3380de['shift']());}}}(_0x5b42,0x4166e));import _0x35ac40 from'fs';let cooldowns={};const obtenerDatos=()=>{const _0x22939e=_0x4cf2;return _0x35ac40[_0x22939e(0x190)](_0x22939e(0x16e))?JSON[_0x22939e(0x17b)](_0x35ac40['readFileSync'](_0x22939e(0x16e),_0x22939e(0x16d))):{'chats':{}};},guardarDatos=_0x51b767=>{const _0x2e3839=_0x4cf2;_0x35ac40[_0x2e3839(0x161)](_0x2e3839(0x16e),JSON[_0x2e3839(0x178)](_0x51b767,null,0x2));},verifi=()=>{const _0x57b2c9=_0x4cf2;try{const _0xf41a10=JSON[_0x57b2c9(0x17b)](_0x35ac40['readFileSync'](_0x57b2c9(0x173),'utf-8'));if(_0xf41a10['name']!==_0x57b2c9(0x166))return![];if(_0xf41a10[_0x57b2c9(0x168)][_0x57b2c9(0x194)]!==_0x57b2c9(0x189))return![];return!![];}catch(_0x13171a){return console[_0x57b2c9(0x164)]('Error\x20al\x20leer\x20package.json:',_0x13171a),![];}};let handler=async(_0x4cc9d6,{conn:_0x1deb30})=>{const _0x2f4ac6=_0x4cf2;if(!_0x4cc9d6[_0x2f4ac6(0x17e)])return;if(!verifi()){await _0x1deb30[_0x2f4ac6(0x16f)](_0x4cc9d6[_0x2f4ac6(0x195)],'𝑬𝒔𝒕𝒆\x20𝒄𝒐𝒎𝒂𝒏𝒅𝒐\x20𝒔𝒐𝒍𝒐\x20𝒆𝒔𝒕𝒂\x20𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆\x20𝒑𝒂𝒓𝒂\x20`𝑴𝒆𝒈𝒖𝒎𝒊𝒏-𝑩𝒐𝒕-𝑴𝑫`.\x0a\x20🔥\x20https://github.com/David-Chian/Megumin-Bot-MD',_0x4cc9d6,rcanal);return;}let _0x29864f=_0x4cc9d6[_0x2f4ac6(0x195)],_0x121b83=_0x4cc9d6[_0x2f4ac6(0x16c)],_0x2c559b=await _0x1deb30[_0x2f4ac6(0x181)](_0x121b83),_0x528525=_0x4cc9d6[_0x2f4ac6(0x17e)][_0x2f4ac6(0x183)][_0x2f4ac6(0x182)](/<id:(.*)>/)?.[0x1],_0x313741=obtenerDatos();if(!_0x528525)return;!_0x313741['chats'][_0x29864f]&&(_0x313741[_0x2f4ac6(0x17d)][_0x29864f]={'usuarios':{},'personajesReservados':[]});let _0x17d432=_0x313741[_0x2f4ac6(0x17d)][_0x29864f],_0x150aec=_0x17d432[_0x2f4ac6(0x193)][_0x2f4ac6(0x17c)](_0x56c397=>_0x56c397['id']===_0x528525),_0x44b0a9=new Date()[_0x2f4ac6(0x179)](),_0x1cccb7=0xa*0x3c*0x3e8,_0xe5d616=cooldowns[_0x121b83]||0x0;if(_0x44b0a9-_0xe5d616<_0x1cccb7){let _0x5efb3e=_0x1cccb7-(_0x44b0a9-_0xe5d616),_0x728f7f=Math['floor'](_0x5efb3e/0xea60),_0x44775c=Math[_0x2f4ac6(0x167)](_0x5efb3e%0xea60/0x3e8);await _0x1deb30[_0x2f4ac6(0x16f)](_0x4cc9d6['chat'],_0x2f4ac6(0x187)+_0x728f7f+_0x2f4ac6(0x184)+_0x44775c+_0x2f4ac6(0x169),_0x4cc9d6,rcanal);return;}if(!_0x150aec){_0x1deb30[_0x2f4ac6(0x16f)](_0x4cc9d6['chat'],_0x2f4ac6(0x177),_0x4cc9d6,rcanal,{'mentions':[_0x121b83]});return;}let _0x2f0740=_0x17d432[_0x2f4ac6(0x171)][_0x150aec[_0x2f4ac6(0x17a)]]?.[_0x2f4ac6(0x176)]?.[_0x2f4ac6(0x16b)](_0x55f6d2=>_0x55f6d2[_0x2f4ac6(0x194)]===_0x150aec[_0x2f4ac6(0x194)]);if(_0x2f0740){_0x1deb30[_0x2f4ac6(0x16f)](_0x4cc9d6[_0x2f4ac6(0x195)],_0x2f4ac6(0x191)+_0x150aec[_0x2f4ac6(0x17f)]+_0x2f4ac6(0x196),_0x4cc9d6,rcanal,{'mentions':[_0x121b83]}),cooldowns[_0x121b83]=_0x44b0a9;return;}if(_0x150aec['userId']!==_0x121b83){setTimeout(async()=>{const _0x38f4c3=_0x2f4ac6;let _0x1b36f0=Math[_0x38f4c3(0x175)]()<0.5;if(_0x1b36f0){!_0x17d432[_0x38f4c3(0x171)][_0x121b83]&&(_0x17d432['usuarios'][_0x121b83]={'characters':[],'characterCount':0x0,'totalRwcoins':0x0});_0x17d432[_0x38f4c3(0x171)][_0x121b83][_0x38f4c3(0x176)]['push']({'name':_0x150aec[_0x38f4c3(0x17f)],'url':_0x150aec['url'],'value':_0x150aec[_0x38f4c3(0x18a)]});_0x17d432[_0x38f4c3(0x171)][_0x150aec['userId']]&&(_0x17d432[_0x38f4c3(0x171)][_0x150aec[_0x38f4c3(0x17a)]][_0x38f4c3(0x176)]=_0x17d432[_0x38f4c3(0x171)][_0x150aec[_0x38f4c3(0x17a)]]['characters'][_0x38f4c3(0x18f)](_0x699dd5=>_0x699dd5[_0x38f4c3(0x194)]!==_0x150aec[_0x38f4c3(0x194)]));_0x17d432[_0x38f4c3(0x193)]=_0x17d432[_0x38f4c3(0x193)][_0x38f4c3(0x18f)](_0x136e4f=>_0x136e4f['id']!==_0x528525),guardarDatos(_0x313741);let _0x3ade4f=_0x150aec[_0x38f4c3(0x17a)],_0x549212=await _0x1deb30[_0x38f4c3(0x181)](_0x3ade4f);await _0x1deb30[_0x38f4c3(0x16f)](_0x4cc9d6[_0x38f4c3(0x195)],'¡𝑭𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆𝒔\x20@'+_0x121b83[_0x38f4c3(0x18e)]('@')[0x0]+_0x38f4c3(0x174)+_0x150aec[_0x38f4c3(0x17f)]+_0x38f4c3(0x15c)+_0x3ade4f['split']('@')[0x0]+'!',_0x4cc9d6,{'mentions':[_0x121b83,_0x3ade4f]});}else{let _0x159a6b=_0x150aec[_0x38f4c3(0x17a)],_0x545461=await _0x1deb30[_0x38f4c3(0x181)](_0x159a6b);await _0x1deb30[_0x38f4c3(0x16f)](_0x4cc9d6['chat'],_0x38f4c3(0x18d)+_0x150aec[_0x38f4c3(0x17f)]+_0x38f4c3(0x15c)+_0x159a6b[_0x38f4c3(0x18e)]('@')[0x0]+'!',_0x4cc9d6,{'mentions':[_0x121b83,_0x159a6b]});}cooldowns[_0x121b83]=_0x44b0a9;});return;}!_0x17d432[_0x2f4ac6(0x171)][_0x121b83]&&(_0x17d432[_0x2f4ac6(0x171)][_0x121b83]={'characters':[],'characterCount':0x0,'totalRwcoins':0x0});let _0x2556be=_0x17d432['usuarios'][_0x121b83],_0x2198ec=_0x2556be[_0x2f4ac6(0x176)]?.[_0x2f4ac6(0x16b)](_0x408cc3=>_0x408cc3[_0x2f4ac6(0x194)]===_0x150aec[_0x2f4ac6(0x194)]);if(_0x2198ec){_0x1deb30[_0x2f4ac6(0x16f)](_0x4cc9d6[_0x2f4ac6(0x195)],_0x2f4ac6(0x185)+_0x150aec[_0x2f4ac6(0x17f)]+'!',_0x4cc9d6,rcanal,{'mentions':[_0x121b83]});return;}_0x2556be[_0x2f4ac6(0x176)][_0x2f4ac6(0x170)]({'name':_0x150aec[_0x2f4ac6(0x17f)],'url':_0x150aec['url'],'value':_0x150aec['value']}),_0x2556be[_0x2f4ac6(0x15e)]++,_0x2556be[_0x2f4ac6(0x18c)]+=_0x150aec[_0x2f4ac6(0x18a)],_0x17d432[_0x2f4ac6(0x171)][_0x121b83]=_0x2556be,_0x17d432[_0x2f4ac6(0x193)]=_0x17d432[_0x2f4ac6(0x193)][_0x2f4ac6(0x18f)](_0x33af52=>_0x33af52['id']!==_0x528525),guardarDatos(_0x313741),_0x1deb30[_0x2f4ac6(0x16f)](_0x4cc9d6['chat'],_0x2f4ac6(0x188)+_0x121b83[_0x2f4ac6(0x18e)]('@')[0x0]+',\x20𝒐𝒃𝒕𝒖𝒗𝒊𝒔𝒕𝒆\x20𝒂\x20'+_0x150aec[_0x2f4ac6(0x17f)]+'!',_0x4cc9d6,{'mentions':[_0x121b83]}),cooldowns[_0x121b83]=_0x44b0a9;};function _0x5b42(){const _0x40d6f8=['personajesReservados','url','chat','\x20𝒚𝒂\x20𝒆𝒔\x20𝒅𝒆\x20𝒐𝒕𝒓𝒐\x20𝒖𝒔𝒖𝒂𝒓𝒊𝒐\x20𝒚\x20𝒏𝒐\x20𝒑𝒖𝒆𝒅𝒆𝒔\x20𝒓𝒐𝒃𝒂𝒓𝒍𝒐!\x0a𝑷𝒓𝒖𝒆𝒃𝒂\x20𝒔𝒖𝒆𝒓𝒕𝒆\x20𝒄𝒐𝒏\x20𝒆𝒍\x20𝒄𝒐𝒎𝒂𝒏𝒅𝒐\x20!𝒓𝒐𝒃𝒂𝒓𝒑','3146514nvPxXx','3087990ylbwzZ','\x20𝒅𝒆\x20@','rollwaifu','characterCount','3cCdRQB','confirmar','writeFileSync','162700DFGtnO','command','error','register','Megumin-Bot-MD','floor','repository','\x20𝒔𝒆𝒈𝒖𝒏𝒅𝒐𝒔.','1568PKhvXv','some','sender','utf-8','data.json','reply','push','usuarios','9828ifbrFr','./package.json',',\x20𝒉𝒂𝒔\x20𝒓𝒐𝒃𝒂𝒅𝒐\x20𝒂\x20','random','characters','¡𝑳𝒐\x20𝒔𝒊𝒆𝒏𝒕𝒐,\x20𝒆𝒔𝒕𝒆\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆\x20𝒏𝒐\x20𝒆𝒔𝒕𝒂\x20𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆\x20𝒆𝒏\x20𝒆𝒔𝒕𝒆\x20𝒎𝒐𝒎𝒆𝒏𝒕𝒐!','stringify','getTime','userId','parse','find','chats','quoted','name','1213140uIyENE','getName','match','text','\x20𝒎𝒊𝒏𝒖𝒕𝒐𝒔\x20𝒚\x20','¡𝒀𝒂\x20𝒕𝒊𝒆𝒏𝒆𝒔\x20𝒆𝒍\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆\x20','103524mbWfet','𝐷𝑒𝑏𝑒𝑠\x20𝑒𝑠𝑝𝑒𝑟𝑎𝑟\x20𝑎𝑛𝑡𝑒𝑠\x20𝑑𝑒\x20𝑖𝑛𝑡𝑒𝑛𝑡𝑎𝑟\x20𝑛𝑢𝑒𝑣𝑎𝑚𝑒𝑛𝑡𝑒.\x0a𝑻𝒊𝒆𝒎𝒑𝒐\x20𝒓𝒆𝒔𝒕𝒂𝒏𝒕𝒆:\x20','¡𝑭𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆𝒔\x20@','git+https://github.com/David-Chian/Megumin-Bot-MD.git','value','810668vdOAoz','totalRwcoins','¡𝑵𝒐\x20𝒉𝒂𝒔\x20𝒑𝒐𝒅𝒊𝒅𝒐\x20𝒓𝒐𝒃𝒂𝒓\x20𝒆𝒍\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆\x20','split','filter','existsSync','¡𝑬𝒍\x20𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆\x20','tags'];_0x5b42=function(){return _0x40d6f8;};return _0x5b42();}handler['help']=[_0x2cd139(0x160)],handler[_0x2cd139(0x192)]=[_0x2cd139(0x15d)],handler[_0x2cd139(0x163)]=['c',_0x2cd139(0x160)],handler[_0x2cd139(0x165)]=!![];function _0x4cf2(_0x4d0382,_0x209c19){const _0x5b429c=_0x5b42();return _0x4cf2=function(_0x4cf2cc,_0x152f7a){_0x4cf2cc=_0x4cf2cc-0x15a;let _0x5c55e3=_0x5b429c[_0x4cf2cc];return _0x5c55e3;},_0x4cf2(_0x4d0382,_0x209c19);}export default handler;