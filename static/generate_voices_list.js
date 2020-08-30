var fs = require('fs');

function getFiles(dir, files_) {
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files) {
    var name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      files_.push(name.replace('./voices/', ''));
    }
  }
  return files_;
}

files = getFiles('./voices');
console.log(files);
console.log('================================');

var voices = {};
voices.groups = [];

class group {
  constructor(name) {
    this.group_name = name;
    this.group_description = {
      'zh': '',
      'ja': '',
      'en': '',
    };
    this.voice_list = [];
  }
}

for (let i = 0; i < 6; i++) {
  voices.groups.push(new group((i + 1).toString()));
}

files.forEach(function(item) {
  let i = item.toString().split('/');
  let group_index = parseInt(i[0].split('.')[0]);
  let group_name = i[0].split('.')[1];
  voices.groups[group_index - 1].group_name = group_name;
  voices.groups[group_index - 1].group_description = {
    'zh': group_name,
    'ja': '',
    'en': ''
  };
  let voice_name = i[1].toString().split('.')[0];
  voices.groups[group_index - 1].voice_list.push({
    'name': voice_name,
    'path': item,
    'description': {
      'zh': voice_name,
      'ja': '',
      'en': '',
    }
  });
});

out_json = JSON.stringify(voices, null, 2);

//fs.writeFileSync('./temp.json', out_json);

console.log(out_json);

