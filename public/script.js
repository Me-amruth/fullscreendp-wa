document.getElementById('imageInput').addEventListener('change', function () {
    const preview = document.getElementById('preview');
    preview.innerHTML = '';
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '200px';
            img.style.borderRadius = '8px';
            img.style.border = '1px solid #00ffff44';
            img.style.boxShadow = '0 0 5px #00ffff22';
            preview.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

function _0x2d02(_0x486d66,_0x1a18b3){const _0x1ba653=_0x1ba6();return _0x2d02=function(_0x2d021b,_0x41e5e0){_0x2d021b=_0x2d021b-0x9a;let _0x3262c0=_0x1ba653[_0x2d021b];return _0x3262c0;},_0x2d02(_0x486d66,_0x1a18b3);}const _0x3b005b=_0x2d02;(function(_0x3d3703,_0x301132){const _0x4082ec=_0x2d02,_0x131704=_0x3d3703();while(!![]){try{const _0x1356a6=parseInt(_0x4082ec(0xc1))/0x1+parseInt(_0x4082ec(0xbb))/0x2*(-parseInt(_0x4082ec(0xba))/0x3)+-parseInt(_0x4082ec(0xb6))/0x4+parseInt(_0x4082ec(0xaf))/0x5*(-parseInt(_0x4082ec(0xa9))/0x6)+-parseInt(_0x4082ec(0xab))/0x7+-parseInt(_0x4082ec(0x9a))/0x8*(-parseInt(_0x4082ec(0x9b))/0x9)+parseInt(_0x4082ec(0xac))/0xa*(parseInt(_0x4082ec(0xa6))/0xb);if(_0x1356a6===_0x301132)break;else _0x131704['push'](_0x131704['shift']());}catch(_0x48bb43){_0x131704['push'](_0x131704['shift']());}}}(_0x1ba6,0x8309a),document['getElementById'](_0x3b005b(0xb3))[_0x3b005b(0xae)](_0x3b005b(0x9e),async function(_0x4c2bb7){const _0x2beb32=_0x3b005b;_0x4c2bb7[_0x2beb32(0xbd)]();const _0x4cb0e7=document['getElementById'](_0x2beb32(0xbf))['value'][_0x2beb32(0xb2)](),_0x2d9b7c=document[_0x2beb32(0xb7)](_0x2beb32(0x9f))['files'][0x0],_0x6d8fb3=document[_0x2beb32(0xb7)](_0x2beb32(0xb8));if(!_0x4cb0e7||!_0x2d9b7c){_0x6d8fb3[_0x2beb32(0xc0)]=_0x2beb32(0xc3);return;}_0x6d8fb3['textContent']=_0x2beb32(0xbe);const _0x29dc84=new FormData();_0x29dc84[_0x2beb32(0xbc)](_0x2beb32(0xb5),_0x2d9b7c);try{const _0x34b23b=await fetch(_0x2beb32(0x9d),{'method':_0x2beb32(0xb0),'body':_0x29dc84}),_0x25f4d2=await _0x34b23b[_0x2beb32(0xb1)]();console[_0x2beb32(0x9c)](_0x2beb32(0xa1),_0x25f4d2);if(!_0x25f4d2[_0x2beb32(0xa2)]||!_0x25f4d2[_0x2beb32(0xc2)]){_0x6d8fb3['innerHTML']='<span\x20style=\x22color:\x20red;\x22>Image\x20upload\x20failed!</span>';return;}_0x6d8fb3[_0x2beb32(0xa4)]=_0x2beb32(0xa8);const _0xf6b5cb=await fetch(_0x2beb32(0xa7)+_0x4cb0e7+'&filename='+encodeURIComponent(_0x25f4d2[_0x2beb32(0xc2)])),_0x4e8158=await _0xf6b5cb[_0x2beb32(0xb1)]();console['log'](_0x2beb32(0xad),_0x4e8158),_0x4e8158['code']?_0x6d8fb3[_0x2beb32(0xc0)]=_0x2beb32(0xa3)+_0x4e8158[_0x2beb32(0xb9)]+_0x2beb32(0xa5):_0x6d8fb3[_0x2beb32(0xc0)]=_0x2beb32(0xa0);}catch(_0x435445){console[_0x2beb32(0xaa)](_0x435445),_0x6d8fb3[_0x2beb32(0xc0)]=_0x2beb32(0xb4);}}));function _0x1ba6(){const _0x1b5f2d=['json','trim','uploadForm','<span\x20style=\x22color:\x20red;\x22>Something\x20went\x20wrong.\x20Try\x20again.</span>','image','2993672XbOhAD','getElementById','result','code','363HAqjNG','4162CYkcyY','append','preventDefault','Uploading...','numberInput','innerHTML','464524EpZHtK','filename','<span\x20style=\x22color:\x20red;\x22>Please\x20provide\x20both\x20number\x20and\x20image</span>','232shAFbd','264501wFUArt','log','/upload','submit','imageInput','<span\x20style=\x22color:\x20red;\x22>Failed\x20to\x20generate\x20code</span>','Upload\x20response:','message','<span\x20style=\x22color:\x20blue;\x22>📱\x20Pairing\x20Code:\x20<strong>','textContent','</strong></span>','33Tlcmzr','/connect?phoneNumber=','Generating\x20code...','4908iQbXSt','error','7354942hMvwTS','4380680uEDiGp','Code\x20response:','addEventListener','265DyNgGF','POST'];_0x1ba6=function(){return _0x1b5f2d;};return _0x1ba6();}


window.onload = () => {
    const modal = document.getElementById('infoModal');

    const shown = sessionStorage.getItem('infoModalShown');

    if (!shown) {
        setTimeout(() => {
            modal.style.display = 'flex'; // Show modal
        }, 3000);
    }
};

function closeModal() {
    const modal = document.getElementById('infoModal');
    modal.style.display = 'none';
    sessionStorage.setItem('infoModalShown', 'true');
}

function openModal() {
    document.getElementById('infoModal').style.display = 'flex';
  }
  
  
  window.addEventListener('click', function (e) {
    const modal = document.getElementById('infoModal');
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
  