const fieldTypeEl = document.getElementById("fieldType");
const labelInputEl = document.getElementById("labelInput");
const addFieldEl = document.getElementById("addField");

const previewEl = document.getElementById("preview");

addFieldEl.addEventListener("click", addField);

function addField(){
    const type =  fieldTypeEl.value;
    const labelText = labelInputEl.value || "Untitled";
    const wrapper = document.createElement("div");
    wrapper.classList.add("field");
    const label = document.createElement("label");
    label.innerText = labelText;
    wrapper.appendChild(label);

    if(type==="text"){
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder="Enter text";
        wrapper.appendChild(input);
    }

    else if(type==="checkbox"){
        const input = document.createElement("input");
        input.type="checkbox";
        wrapper.appendChild(input);
    }

    else if(type==="radio"){
        const input = document.createElement("radio");
        input.type="radio";
        input.name="radioGroup";
        wrapper.appendChild(input);
    }

    previewEl.appendChild(wrapper);

    labelInputEl.value="";
}