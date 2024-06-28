document.getElementById('session-type').addEventListener('change', function() {
let otherReasonGroup = document.getElementById('other-reason-group');
    if (this.value === 'other') {
        otherReasonGroup.classList.remove('d-none');
    } else {
        otherReasonGroup.classList.add('d-none');
    }
});