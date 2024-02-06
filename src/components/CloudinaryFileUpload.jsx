import { useEffect, useState } from 'react';

let cloudinary;
let widgets = {};

const ImageUploadWidget = ({ children, onUpload, identifier }) => {
  const [widget, setWidget] = useState(null);

  useEffect(() => {
    if (!cloudinary) {
      cloudinary = window.cloudinary;
    }

    function onIdle() {
      if (!widgets[identifier]) {
        widgets[identifier] = createWidget();
        console.log(`Widget ${identifier} created:`, widgets[identifier]);
        setWidget(widgets[identifier]);
      }
    }

    'requestIdleCallback' in window ? requestIdleCallback(onIdle) : setTimeout(onIdle, 1);
  }, [identifier]);

  function createWidget() {
    const options = {
      cloudName: 'drwfh1tcn',
      uploadPreset: 'xrvclikm'
    };

    return cloudinary?.createUploadWidget(options, function (error, result) {
      if (error || result.event === 'success') {
        onUpload(error, result, widgets[identifier]);
      }
    });
  }

  function open() {
    if (!widgets[identifier]) {
      widgets[identifier] = createWidget();
      setWidget(widgets[identifier]);
    }
    widgets[identifier] && widgets[identifier].open();
  }

  return <>{children({ cloudinary, widget: widgets[identifier], open })}</>;
};

export { ImageUploadWidget };
