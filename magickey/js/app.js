
$('#textBox').keyup(()=>{
    let textData = $('#textBox').val();
    let splitData = textData.split(',');
    console.log(splitData);
    $('#entry_data').html(`${splitData.length}`);
    
    if (splitData[splitData.length-1] == '') {
        $('#entry_data').html(`${splitData.length-1}`);
    }
});

$('#singleWord').click(()=>{

    let textData = $('#textBox').val();
    let spaceData = textData.replace(/\s\s+/g, ' ');
    // let spaceAdd = spaceData.replace(",", ', ');
    let splitData = textData.split(',');
    let data = [];
    for (let i = 0; i < splitData.length; i++) {
        datapush = splitData[i].replace(/\s\s+/g, ' ');
        data.push(datapush.trim());
    }
    let uniq = [...new Set(data)];
    let final = [];
    for (let i = 0; i < uniq.length; i++) {
        if (i <= 0) {
            data = uniq[i];
        }else{
            data = " " + uniq[i];
        }
        final.push(data);
    }
   $('#textBoxResult').val(final);
   $('#result_data').html(`${final.length} `);
   $('#entry_data').html(`${splitData.length}`);

});

function lowerCase(){
    let lowCaseData = $('#textBoxResult').val();
    $('#textBoxResult').val(lowCaseData.toLowerCase());
}

function UpperCase(){
    let lowCaseData = $('#textBoxResult').val();
    $('#textBoxResult').val(lowCaseData.toUpperCase());
}

$('#copy').click(()=>{
    let TextData = $('#textBoxResult').val();
    let otWord = $('#result_data').html();
    window.navigator.clipboard.writeText(TextData)

    $('#copyAlert').html(`${otWord} Keywords Copied`); 

    setTimeout(() => {
        $('#copyAlert').html(' -- '); 
    }, 3000);
    
});


function CleanData()
{
    $('#textBox').val('');
    $('#textBoxResult').val('');
    $('#result_data').html(`0`);
   $('#entry_data').html(`0`);
}


function hashTag()
{
    let textData = $('#textBox').val();
    let spaceData = textData.replace(/\s\s+/g, ' ');
    // let spaceAdd = spaceData.replace(",", ', ');
    let splitData = textData.split(',');
    let data = [];
    for (let i = 0; i < splitData.length; i++) {
        datapush = splitData[i].replace(/\s\s+/g, ' ');
        data.push(datapush.trim());
    }
    let uniq = [...new Set(data)];
    let final = [];
    for (let i = 0; i < uniq.length; i++) {
        if (i <= 0) {
            data = "#"+uniq[i].replace(/ /g,'');
        }else{
            data = " #" + uniq[i].replace(/ /g,'');
        }
        final.push(data);
    }

   $('#textBoxResult').val(final.join(""));
}
