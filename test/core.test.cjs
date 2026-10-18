const test=require('node:test');const assert=require('node:assert/strict');const R=require('../core.js');
test('flags external recipients',()=>assert.ok(R.inspect({to:'a@outside.test'},'inside.test').findings.some(x=>x.kind==='external-recipient')));
test('allows internal recipients',()=>assert.equal(R.inspect({to:'a@inside.test'},'inside.test').findings.length,0));
test('flags malformed tokens',()=>assert.ok(R.inspect({to:'not-an-address'},'inside.test').findings.some(x=>x.kind==='malformed')));
test('flags duplicates across fields',()=>assert.ok(R.inspect({to:'a@inside.test',cc:'A@inside.test'},'inside.test').findings.some(x=>x.kind==='duplicate-recipient')));
test('parses comma and newline lists',()=>assert.equal(R.inspect({to:'a@inside.test,\nb@inside.test'},'inside.test').findings.length,0));
test('report states its boundary',()=>assert.match(R.report(R.inspect({to:''},'')),/does not access contacts/));

