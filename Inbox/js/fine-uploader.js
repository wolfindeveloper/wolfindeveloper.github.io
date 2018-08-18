  $(document).ready(function(){	
        // FILEUPLOAD
        $('.fine-uploader').fineUploader({
            template: 'qq-template-validation',
            request: {
                endpoint: '/v5/'
            },
            thumbnails: {
                placeholders: {
                    waitingPath: '/v5/placeholders/waiting-generic.png',
                    notAvailablePath: '/v5/placeholders/not_available-generic.png'
                }
            },
            validation: {
                allowedExtensions: ['jpeg', 'jpg', 'txt', 'png'],
                itemLimit: 3,
                sizeLimit: 5120000000 // 50 kB = 50 * 1024 bytes
            }
        });
});        