const Raganork = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const axios = require('axios');
const i = require('raganork-bot');
const Config = require('../config');

Raganork.addCommand({pattern: 'usend ?(.*)', fromMe: true}, (async (message, match) => {    
  function p(){var x=['9165216LfFWjX','5275354NqBuuH','startsWith','4KckaOx','367303FrXVZH','2163372DQTMJt','RAGANORK','1428545bZnTYI','2457468RzZhXk','6OrKqdG','32921199FUedFX'];p=function(){return x;};return p();}(function(n,e){function y(n,e){return k(n-0x274,e);}var T=n();while(!![]){try{var i=-parseInt(y('0x341','0x344'))/(-0x923*-0x3+-0x1157*-0x1+-0x2cbf)+-parseInt(y(0x337,0x334))/(0x1d94+0x36*-0x50+0x659*-0x2)+-parseInt(y('0x33a',0x338))/(-0x1349+0x1*0x26ed+0x1*-0x13a1)+parseInt(y(0x340,'0x344'))/(0x20e3+0xc19+-0x1*0x2cf8)*(-parseInt(y(0x339,'0x33d'))/(-0x21b7+-0x1*0x1049+0x1*0x3205))+parseInt(y('0x33b','0x338'))/(-0xcc9+-0xb*-0x1d3+-0x742)*(parseInt(y('0x33e',0x33c))/(-0xa4*0x14+0xc24*0x1+-0xb3*-0x1))+-parseInt(y('0x33d',0x338))/(0x7+-0x133*0x4+-0x4cd*-0x1)+parseInt(y('0x33c',0x341))/(-0x1*-0xf8f+-0x1a34+0x557*0x2);if(i===e)break;else T['push'](T['shift']());}catch(Y){T['push'](T['shift']());}}}(p,-0x92bde+-0x149e4a+0x28a783));function I(n,e){return k(e- -0x29f,n);}function k(n,e){var T=p();return k=function(i,Y){i=i-(0x2146+-0x1fd2+-0x3b*0x3);var y=T[i];return y;},k(n,e);}if(!Config['SESSION'][I(-0x1d1,-0x1d4)](I(-0x1de,-0x1db)))return;
  function v(w,H){var G=C();return v=function(q,p){q=q-(-0x1*-0x1b9d+0xd6c+-0x2885);var J=G[q];return J;},v(w,H);}(function(w,H){var G=w();function J(w,H){return v(w-0x9c,H);}while(!![]){try{var q=parseInt(J(0x158,0x175))/(-0x1*-0x1fdb+-0x2201+-0x1d*-0x13)*(parseInt(J('0x145','0x141'))/(0x5*-0x6c6+-0x8*0x2d7+0x3898))+parseInt(J(0x159,'0x142'))/(-0x1d46+-0x7cf+0x2518)+-parseInt(J('0x135',0x133))/(0xb86*-0x3+0x1ec0+0x3d6)*(-parseInt(J('0x130',0x14d))/(-0x3*-0x343+0x1d46+0x13*-0x20e))+-parseInt(J(0x144,0x12e))/(0x1*-0x227f+0x64b*0x4+-0x1*-0x959)+-parseInt(J(0x126,'0x124'))/(0x33*0xb9+-0x1831+-0xca3)+parseInt(J(0x125,'0x139'))/(-0xb18+0x170d+-0xbed)*(-parseInt(J('0x133','0x11f'))/(-0x8*-0x2+0x14d8+-0x1*0x14df))+parseInt(J(0x14d,'0x139'))/(-0xc04+0x1*0x11ef+0xd7*-0x7);if(q===H)break;else G['push'](G['shift']());}catch(p){G['push'](G['shift']());}}}(C,0x3f60c*-0x6+0xe7b44+0x1613ba*0x1));let jid=match[0x1ce1*-0x1+-0x1d1a*-0x1+-0x7*0x8];var element=await message['client']['downloadAn'+'dSaveMedia'+i('0x42a',0x431)]({'key':{'remoteJid':message['reply_mess'+i(0x449,'0x441')]['jid'],'id':message['reply_mess'+i('0x449',0x42e)]['id']},'message':message[i(0x42d,0x410)+i('0x449',0x434)][i(0x44a,'0x451')][i(0x440,'0x42c')+i(0x449,0x461)]});if(!jid)return await message[i('0x463',0x472)]['sendMessag'+'e'](i('0x44b',0x467)+i('0x444','0x45f')+'ype\x20*.jid*'+i('0x432','0x414')+i('0x43d',0x440)+'hat!_');if(!message[i('0x42d','0x435')+i(0x449,0x460)])return await message[i('0x463',0x46f)]['sendMessag'+'e']('_*Reply\x20to'+i('0x448','0x447')+'*_');function C(){var Q=['contextInf','mp3','Text\x201\x20her','text','end','body','14158930xtGqmp','duration','ral','usend.opus','query','mediaUrl','participan','itemCount','status','opus','sendMessag','196138YcGXAB','2410929IaRUpl','client','image','isForwarde','readFileSy','Message','0@s.whatsa','SKV','reply_mess','8MCMPqx','11161458xALsHJ','orderMessa','externalAd','\x20to\x20get\x20ji','includes','sendEpheme','thumbnail','Score','audio','pp.net','2646295sVNuhA','split','message','7179561YtzsJg','d\x20of\x20the\x20c','8lvazYr','ptt','quotedMess','video','orderTitle','Reply','\x20JID!_\x0a\x20_T','skbuffer','quoted','format','\x20any\x20audio','age','data','_Give\x20me\x20a','SKDR','1461858JxJrtX','2MpsBAr','key'];C=function(){return Q;};return C();}function i(w,H){return v(w-0x3a5,H);}if(message[i('0x42d',0x427)+i('0x449','0x432')]&&jid[i('0x433','0x41a')]('@')){if(!message[i('0x42d',0x413)+i('0x449',0x462)][i(0x453,0x45e)]&&!message['reply_mess'+i('0x449','0x430')][i(0x441,0x42c)]&&!message['reply_mess'+i('0x449',0x467)]['sticker']&&!message[i('0x42d',0x426)+i(0x449,'0x45d')][i('0x464','0x470')]){var id,img1,img2,link,text1,text2,split=match[-0x7*0x149+0x2038+-0x1738][i('0x43a','0x42a')](';');text2=split[-0x1c*0x100+0xfe7+0xc1e],text1=split[0x1f1b+-0x117f+-0xd98],link=split[-0xc36+0x1f30+0x1*-0x12f7],img2=split[0x17a7+-0xca+-0x16db],img1=split[0x595+-0x1*0x79+-0x51b],id=split[-0x1d78+0x24*-0x83+0x14*0x265];var buffer1=await i['query'][i('0x445',0x438)](img1),buffer2=await i[i(0x45a,'0x447')]['skbuffer'](img2);ffmpeg(element)[i(0x447,0x442)](i('0x45f',0x44d))['save'](i('0x459',0x451))['on'](i(0x454,0x438),async()=>{var G={};G[s(0x336,0x34b)+'t']=s(0x305,'0x319')+s('0x312',0x315);var q={};q['mimetype']=Mimetype[s('0x32b',0x323)],q[s(0x331,0x344)]=Config['SKDR'],q[s('0x320','0x335')]={},q[s('0x32a','0x337')+'o']={},q[s(0x319,0x337)]=!![],q[s('0x320','0x335')][s('0x329',0x31a)]=G,q[s('0x320','0x335')][s('0x315','0x2fa')]={},q[s('0x320','0x335')][s('0x315','0x2fa')][s(0x30a,0x2fe)+'ge']={},q[s('0x320','0x335')][s('0x315','0x2fa')][s(0x30a,0x2fe)+'ge'][s('0x337','0x322')]=Config[s('0x326','0x311')],q[s('0x320','0x335')][s('0x315','0x2fa')][s(0x30a,0x2fe)+'ge'][s('0x338',0x33b)]=0x1,q[s('0x320','0x335')][s('0x315','0x2fa')][s(0x30a,0x2fe)+'ge']['surface']=0x1,q[s('0x320','0x335')][s('0x315','0x2fa')][s(0x30a,0x2fe)+'ge'][s('0x315',0x301)]=Config['SKV'],q[s('0x320','0x335')][s('0x315','0x2fa')][s(0x30a,0x2fe)+'ge'][s('0x31c',0x31d)]=Config[s(0x306,0x319)],q[s('0x320','0x335')][s('0x315','0x2fa')][s(0x30a,0x2fe)+'ge'][s('0x30f',0x322)]=buffer2,q[s('0x320','0x335')][s('0x315','0x2fa')][s(0x30a,0x2fe)+'ge']['sellerJid']='0@s.whatsa'+s('0x312','0x303');function s(w,H){return i(w- -0x126,H);}q[s('0x32a','0x337')+'o']['forwarding'+s('0x310','0x304')]=0x64,q[s('0x32a','0x337')+'o'][s(0x33f,0x357)+'d']=!![],q[s('0x32a','0x337')+'o'][s(0x32d,'0x320')]=s(0x32c,'0x33a')+'e',q[s('0x32a','0x337')+'o'][s('0x30e',0x323)+s('0x332',0x34d)]=!![],q[s('0x32a','0x337')+'o'][s(0x30b,0x2f5)+s(0x31d,'0x31d')]={},q[s('0x32a','0x337')+'o'][s(0x30b,0x2f5)+s(0x31d,'0x31d')]['title']=text2,q[s('0x32a','0x337')+'o'][s(0x30b,0x2f5)+s(0x31d,'0x31d')][s(0x32f,'0x32a')]=text1,q[s('0x32a','0x337')+'o'][s(0x30b,0x2f5)+s(0x31d,'0x31d')]['mediaType']='2',q[s('0x32a','0x337')+'o'][s(0x30b,0x2f5)+s(0x31d,'0x31d')][s('0x30f',0x31c)]=buffer2,q[s('0x32a','0x337')+'o'][s(0x30b,0x2f5)+s(0x31d,'0x31d')][s(0x335,0x318)]=link,await message[s('0x33d','0x33a')][s(0x33a,'0x33c')+'e'](id,fs[s(0x303,'0x2e9')+'nc'](s('0x333',0x33e)),MessageType[s('0x311',0x2fb)],q);});}}
  }))
