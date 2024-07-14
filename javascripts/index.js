document.getElementById('session-type').addEventListener('change', function() {
let otherReasonGroup = document.getElementById('other-reason-group');
    if (this.value === 'other') {
        otherReasonGroup.classList.remove('d-none');
    } else {
        otherReasonGroup.classList.add('d-none');
    }
});

// auto update the copyright footer year
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright').innerHTML = `&copy; ${currentYear} VicerhaTech. All rights reserved.`;

    