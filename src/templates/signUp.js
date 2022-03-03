'use strict'
const url = 'https://beta.app.symfonia.io'
const app = 'Symfonia'

module.exports = ({ name, email, password }) => {
  name = name.split(/\s/)
  name = name[0].charAt(0).toUpperCase() + String(name[0].slice(1)).toLocaleLowerCase()

  return {
    to: [email],
    subject: `Bienvenido a ${app}`,
    html: `<!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
            <!-- NAME: 1 COLUMN -->
            <!--[if gte mso 15]>
            <xml>
                <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>*|MC:SUBJECT|*</title>
            
        <style type="text/css">
        p{
          margin:10px 0;
          padding:0;
        }
        table{
          border-collapse:collapse;
        }
        h1,h2,h3,h4,h5,h6{
          display:block;
          margin:0;
          padding:0;
        }
        img,a img{
          border:0;
          height:auto;
          outline:none;
          text-decoration:none;
        }
        body,#bodyTable,#bodyCell{
          height:100%;
          margin:0;
          padding:0;
          width:100%;
        }
        .mcnPreviewText{
          display:none !important;
        }
        #outlook a{
          padding:0;
        }
        img{
          -ms-interpolation-mode:bicubic;
        }
        table{
          mso-table-lspace:0pt;
          mso-table-rspace:0pt;
        }
        .ReadMsgBody{
          width:100%;
        }
        .ExternalClass{
          width:100%;
        }
        p,a,li,td,blockquote{
          mso-line-height-rule:exactly;
        }
        a[href^=tel],a[href^=sms]{
          color:inherit;
          cursor:default;
          text-decoration:none;
        }
        p,a,li,td,body,table,blockquote{
          -ms-text-size-adjust:100%;
          -webkit-text-size-adjust:100%;
        }
        .ExternalClass,.ExternalClass p,.ExternalClass td,.ExternalClass div,.ExternalClass span,.ExternalClass font{
          line-height:100%;
        }
        a[x-apple-data-detectors]{
          color:inherit !important;
          text-decoration:none !important;
          font-size:inherit !important;
          font-family:inherit !important;
          font-weight:inherit !important;
          line-height:inherit !important;
        }
        #bodyCell{
          padding:10px;
        }
        .templateContainer{
          max-width:600px !important;
        }
        a.mcnButton{
          display:block;
        }
        .mcnImage,.mcnRetinaImage{
          vertical-align:bottom;
        }
        .mcnTextContent{
          word-break:break-word;
        }
        .mcnTextContent img{
          height:auto !important;
        }
        .mcnDividerBlock{
          table-layout:fixed !important;
        }
      /*
      @tab Page
      @section Background Style
      @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
      */
        body,#bodyTable{
          /*@editable*/background-color:#FAFAFA;
        }
      /*
      @tab Page
      @section Background Style
      @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
      */
        #bodyCell{
          /*@editable*/border-top:0;
        }
      /*
      @tab Page
      @section Email Border
      @tip Set the border for your email.
      */
        .templateContainer{
          /*@editable*/border:0;
        }
      /*
      @tab Page
      @section Heading 1
      @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
      @style heading 1
      */
        h1{
          /*@editable*/color:#202020;
          /*@editable*/font-family:Helvetica;
          /*@editable*/font-size:26px;
          /*@editable*/font-style:normal;
          /*@editable*/font-weight:bold;
          /*@editable*/line-height:125%;
          /*@editable*/letter-spacing:normal;
          /*@editable*/text-align:left;
        }
      /*
      @tab Page
      @section Heading 2
      @tip Set the styling for all second-level headings in your emails.
      @style heading 2
      */
        h2{
          /*@editable*/color:#202020;
          /*@editable*/font-family:Helvetica;
          /*@editable*/font-size:22px;
          /*@editable*/font-style:normal;
          /*@editable*/font-weight:bold;
          /*@editable*/line-height:125%;
          /*@editable*/letter-spacing:normal;
          /*@editable*/text-align:left;
        }
      /*
      @tab Page
      @section Heading 3
      @tip Set the styling for all third-level headings in your emails.
      @style heading 3
      */
        h3{
          /*@editable*/color:#202020;
          /*@editable*/font-family:Helvetica;
          /*@editable*/font-size:20px;
          /*@editable*/font-style:normal;
          /*@editable*/font-weight:bold;
          /*@editable*/line-height:125%;
          /*@editable*/letter-spacing:normal;
          /*@editable*/text-align:left;
        }
      /*
      @tab Page
      @section Heading 4
      @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
      @style heading 4
      */
        h4{
          /*@editable*/color:#202020;
          /*@editable*/font-family:Helvetica;
          /*@editable*/font-size:18px;
          /*@editable*/font-style:normal;
          /*@editable*/font-weight:bold;
          /*@editable*/line-height:125%;
          /*@editable*/letter-spacing:normal;
          /*@editable*/text-align:left;
        }
      /*
      @tab Preheader
      @section Preheader Style
      @tip Set the background color and borders for your email's preheader area.
      */
        #templatePreheader{
          /*@editable*/background-color:#FAFAFA;
          /*@editable*/background-image:none;
          /*@editable*/background-repeat:no-repeat;
          /*@editable*/background-position:center;
          /*@editable*/background-size:cover;
          /*@editable*/border-top:0;
          /*@editable*/border-bottom:0;
          /*@editable*/padding-top:9px;
          /*@editable*/padding-bottom:9px;
        }
      /*
      @tab Preheader
      @section Preheader Text
      @tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
      */
        #templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
          /*@editable*/color:#656565;
          /*@editable*/font-family:Helvetica;
          /*@editable*/font-size:12px;
          /*@editable*/line-height:150%;
          /*@editable*/text-align:left;
        }
      /*
      @tab Preheader
      @section Preheader Link
      @tip Set the styling for your email's preheader links. Choose a color that helps them stand out from your text.
      */
        #templatePreheader .mcnTextContent a,#templatePreheader .mcnTextContent p a{
          /*@editable*/color:#656565;
          /*@editable*/font-weight:normal;
          /*@editable*/text-decoration:underline;
        }
      /*
      @tab Header
      @section Header Style
      @tip Set the background color and borders for your email's header area.
      */
        #templateHeader{
          /*@editable*/background-color:#FFFFFF;
          /*@editable*/background-image:none;
          /*@editable*/background-repeat:no-repeat;
          /*@editable*/background-position:center;
          /*@editable*/background-size:cover;
          /*@editable*/border-top:0;
          /*@editable*/border-bottom:0;
          /*@editable*/padding-top:9px;
          /*@editable*/padding-bottom:0;
        }
      /*
      @tab Header
      @section Header Text
      @tip Set the styling for your email's header text. Choose a size and color that is easy to read.
      */
        #templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
          /*@editable*/color:#202020;
          /*@editable*/font-family:Helvetica;
          /*@editable*/font-size:16px;
          /*@editable*/line-height:150%;
          /*@editable*/text-align:left;
        }
      /*
      @tab Header
      @section Header Link
      @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
      */
        #templateHeader .mcnTextContent a,#templateHeader .mcnTextContent p a{
          /*@editable*/color:#007C89;
          /*@editable*/font-weight:normal;
          /*@editable*/text-decoration:underline;
        }
      /*
      @tab Body
      @section Body Style
      @tip Set the background color and borders for your email's body area.
      */
        #templateBody{
          /*@editable*/background-color:#FFFFFF;
          /*@editable*/background-image:none;
          /*@editable*/background-repeat:no-repeat;
          /*@editable*/background-position:center;
          /*@editable*/background-size:cover;
          /*@editable*/border-top:0;
          /*@editable*/border-bottom:2px solid #EAEAEA;
          /*@editable*/padding-top:0;
          /*@editable*/padding-bottom:9px;
        }
      /*
      @tab Body
      @section Body Text
      @tip Set the styling for your email's body text. Choose a size and color that is easy to read.
      */
        #templateBody .mcnTextContent,#templateBody .mcnTextContent p{
          /*@editable*/color:#202020;
          /*@editable*/font-family:Helvetica;
          /*@editable*/font-size:16px;
          /*@editable*/line-height:150%;
          /*@editable*/text-align:left;
        }
      /*
      @tab Body
      @section Body Link
      @tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
      */
        #templateBody .mcnTextContent a,#templateBody .mcnTextContent p a{
          /*@editable*/color:#007C89;
          /*@editable*/font-weight:normal;
          /*@editable*/text-decoration:underline;
        }
      /*
      @tab Footer
      @section Footer Style
      @tip Set the background color and borders for your email's footer area.
      */
        #templateFooter{
          /*@editable*/background-color:#FAFAFA;
          /*@editable*/background-image:none;
          /*@editable*/background-repeat:no-repeat;
          /*@editable*/background-position:center;
          /*@editable*/background-size:cover;
          /*@editable*/border-top:0;
          /*@editable*/border-bottom:0;
          /*@editable*/padding-top:9px;
          /*@editable*/padding-bottom:9px;
        }
      /*
      @tab Footer
      @section Footer Text
      @tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
      */
        #templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
          /*@editable*/color:#656565;
          /*@editable*/font-family:Helvetica;
          /*@editable*/font-size:12px;
          /*@editable*/line-height:150%;
          /*@editable*/text-align:center;
        }
      /*
      @tab Footer
      @section Footer Link
      @tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
      */
        #templateFooter .mcnTextContent a,#templateFooter .mcnTextContent p a{
          /*@editable*/color:#656565;
          /*@editable*/font-weight:normal;
          /*@editable*/text-decoration:underline;
        }
      @media only screen and (min-width:768px){
        .templateContainer{
          width:600px !important;
        }
    
    }	@media only screen and (max-width: 480px){
        body,table,td,p,a,li,blockquote{
          -webkit-text-size-adjust:none !important;
        }
    
    }	@media only screen and (max-width: 480px){
        body{
          width:100% !important;
          min-width:100% !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnRetinaImage{
          max-width:100% !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnImage{
          width:100% !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnCartContainer,.mcnCaptionTopContent,.mcnRecContentContainer,.mcnCaptionBottomContent,.mcnTextContentContainer,.mcnBoxedTextContentContainer,.mcnImageGroupContentContainer,.mcnCaptionLeftTextContentContainer,.mcnCaptionRightTextContentContainer,.mcnCaptionLeftImageContentContainer,.mcnCaptionRightImageContentContainer,.mcnImageCardLeftTextContentContainer,.mcnImageCardRightTextContentContainer,.mcnImageCardLeftImageContentContainer,.mcnImageCardRightImageContentContainer{
          max-width:100% !important;
          width:100% !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnBoxedTextContentContainer{
          min-width:100% !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnImageGroupContent{
          padding:9px !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnCaptionLeftContentOuter .mcnTextContent,.mcnCaptionRightContentOuter .mcnTextContent{
          padding-top:9px !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnImageCardTopImageContent,.mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,.mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent{
          padding-top:18px !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnImageCardBottomImageContent{
          padding-bottom:9px !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnImageGroupBlockInner{
          padding-top:0 !important;
          padding-bottom:0 !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnImageGroupBlockOuter{
          padding-top:9px !important;
          padding-bottom:9px !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnTextContent,.mcnBoxedTextContentColumn{
          padding-right:18px !important;
          padding-left:18px !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcnImageCardLeftImageContent,.mcnImageCardRightImageContent{
          padding-right:18px !important;
          padding-bottom:0 !important;
          padding-left:18px !important;
        }
    
    }	@media only screen and (max-width: 480px){
        .mcpreview-image-uploader{
          display:none !important;
          width:100% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Heading 1
      @tip Make the first-level headings larger in size for better readability on small screens.
      */
        h1{
          /*@editable*/font-size:22px !important;
          /*@editable*/line-height:125% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Heading 2
      @tip Make the second-level headings larger in size for better readability on small screens.
      */
        h2{
          /*@editable*/font-size:20px !important;
          /*@editable*/line-height:125% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Heading 3
      @tip Make the third-level headings larger in size for better readability on small screens.
      */
        h3{
          /*@editable*/font-size:18px !important;
          /*@editable*/line-height:125% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Heading 4
      @tip Make the fourth-level headings larger in size for better readability on small screens.
      */
        h4{
          /*@editable*/font-size:16px !important;
          /*@editable*/line-height:150% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Boxed Text
      @tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
      */
        .mcnBoxedTextContentContainer .mcnTextContent,.mcnBoxedTextContentContainer .mcnTextContent p{
          /*@editable*/font-size:14px !important;
          /*@editable*/line-height:150% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Preheader Visibility
      @tip Set the visibility of the email's preheader on small screens. You can hide it to save space.
      */
        #templatePreheader{
          /*@editable*/display:block !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Preheader Text
      @tip Make the preheader text larger in size for better readability on small screens.
      */
        #templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
          /*@editable*/font-size:14px !important;
          /*@editable*/line-height:150% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Header Text
      @tip Make the header text larger in size for better readability on small screens.
      */
        #templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
          /*@editable*/font-size:16px !important;
          /*@editable*/line-height:150% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Body Text
      @tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
      */
        #templateBody .mcnTextContent,#templateBody .mcnTextContent p{
          /*@editable*/font-size:16px !important;
          /*@editable*/line-height:150% !important;
        }
    
    }	@media only screen and (max-width: 480px){
      /*
      @tab Mobile Styles
      @section Footer Text
      @tip Make the footer content text larger in size for better readability on small screens.
      */
        #templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
          /*@editable*/font-size:14px !important;
          /*@editable*/line-height:150% !important;
        }
    
    }</style></head>
        <body>
            <!--*|END:IF|*-->
            <center style="background-color: #FAFAFA !important;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="max-width: 600px !important; background-color: #ffffff !important;">
                    <tr>
                        <td align="center" valign="top" id="bodyCell">
                            <!-- BEGIN TEMPLATE // -->
                            <!--[if (gte mso 9)|(IE)]>
                            <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                            <tr>
                            <td align="center" valign="top" width="600" style="width:600px;">
                            <![endif]-->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                <tr>
                                    <td valign="top" id="templatePreheader"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
        <tbody class="mcnTextBlockOuter">
            <tr>
                <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                    <!--[if mso]>
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
            <tr>
            <![endif]-->
              
            <!--[if mso]>
            <td valign="top" width="600" style="width:600px;">
            <![endif]-->

            <!--[if mso]>
            </td>
            <![endif]-->
                    
            <!--[if mso]>
            </tr>
            </table>
            <![endif]-->
                </td>
            </tr>
        </tbody>
    </table></td>
                                </tr>
                                <tr>
                                    <td valign="top" id="templateHeader"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
        <tbody class="mcnImageBlockOuter">
                <tr>
                    <td valign="top" style="padding:9px" class="mcnImageBlockInner">
                        <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                            <tbody><tr>
                                <td class="mcnImageContent" valign="top" style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;">
                                    
                                        
                                            <img align="center" alt="" src="https://cdn01.prd.symfonia.io/Mail/9c3e360d-eddd-4801-996a-ab0a53ec8f62.png" width="146.64000000000001" style="max-width:1000px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                        
                                    
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
        </tbody>
    </table></td>
                                </tr>
                                <tr>
                                    <td valign="top" id="templateBody"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
        <tbody class="mcnImageBlockOuter">
                <tr>
                    <td valign="top" style="padding:9px" class="mcnImageBlockInner">
                        <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                            <tbody><tr>
                                <td class="mcnImageContent" valign="top" style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;">
                                    
                                        
                                            <img align="center" alt="" src="https://cdn01.prd.symfonia.io/Mail/c6c85f66-a600-4871-b069-337aa7935de3.png" width="564" style="max-width:1200px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                        
                                    
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
        </tbody>
    </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
        <tbody class="mcnTextBlockOuter">
            <tr>
                <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                    <!--[if mso]>
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
            <tr>
            <![endif]-->
              
            <!--[if mso]>
            <td valign="top" width="600" style="width:600px;">
            <![endif]-->
                    <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                        <tbody><tr>
                            
                            <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                            
                                <h1>Bienvenido a Symfonia.</h1>
    <br>
    Hola ${name}, estas son tus credenciales:<br>
    <strong>Correo: </strong>${email}<br>
    <strong>Contraseña:</strong> ${password}
                            </td>
                        </tr>
                    </tbody></table>
            <!--[if mso]>
            </td>
            <![endif]-->
                    
            <!--[if mso]>
            </tr>
            </table>
            <![endif]-->
                </td>
            </tr>
        </tbody>
    </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnButtonBlock" style="min-width:100%;">
        <tbody class="mcnButtonBlockOuter">
            <tr>
                <td style="padding-top:0; padding-right:18px; padding-bottom:18px; padding-left:18px;" valign="top" align="center" class="mcnButtonBlockInner">
                    <table border="0" cellpadding="0" cellspacing="0" class="mcnButtonContentContainer" style="border-collapse: separate !important;border-radius: 50px;background-color: #15CEBC;">
                        <tbody>
                            <tr>
                                <td align="center" valign="middle" class="mcnButtonContent" style="font-family: Arial; font-size: 16px; padding: 18px;">
                                    <a class="mcnButton " title="Iniciar sesión" href="${url}" target="_blank" style="font-weight: bold;letter-spacing: normal;line-height: 100%;text-align: center;text-decoration: none;color: #FFFFFF;">Iniciar sesión</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
        <tbody class="mcnTextBlockOuter">
            <tr>
                <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                    <!--[if mso]>
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
            <tr>
            <![endif]-->
              
            <!--[if mso]>
            <td valign="top" width="600" style="width:600px;">
            <![endif]-->
                    <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                        <tbody><tr>
                            
                            <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                            
                                <p>Soy Wilson, del equipo de asistencia, y quería contarte&nbsp;algunas de las mejores formas de empezar a utilizar la herramienta:</p>
    
    <ul>
      <li><a href="http://pentcloud.com" target="_blank">Envía&nbsp;una factura.</a> Personaliza&nbsp;su apariencia, agrega&nbsp;tu logotipo, ingresa&nbsp;un cliente y ¡listo!<br>
      &nbsp;</li>
      <li><a href="http://pentcloud.com" target="_blank">Utiliza&nbsp;Pagos en línea.</a> ¿Una vez que se envías esa factura? Recibe&nbsp;pagos más rápido con todo tipo de opciones de pago, como transferencias bancarias y transacciones con tarjeta de crédito (sin seguimientos incómodos).<br>
      &nbsp;</li>
      <li><a href="http://pentcloud.com" target="_blank">Revisa tus gastos.</a> ¿Recibos acumulados? Toma&nbsp;una foto o cárgala&nbsp;manualmente y comienza&nbsp;a organizar tus gastos.<br>
      &nbsp;</li>
      <li><a href="http://pentcloud.com" target="_blank">Crea una cotización.</a> Envía&nbsp;cotizaciones rápidamente que los clientes puedan aprobar. Luego conviértelos&nbsp;en facturas que les&nbsp;permitan pagar rápidamente.</li>
    </ul>
    <br>
    También hicimos esta <a href="http://www.symfonia.io" target="_blank">guía rápida</a> que te muestra cómo comenzar.<br>
    <br>
    <strong>¿Y si necesitas un poco de ayuda?</strong> Simplemente envía un correo a: <u>soporte@symfonia.io</u>,o llámanos al número: <u>+502 22143232,</u> comunícate con mi equipo o ve el tutorial paso a paso de las funciones en un video corto.
                            </td>
                        </tr>
                    </tbody></table>
            <!--[if mso]>
            </td>
            <![endif]-->
                    
            <!--[if mso]>
            </tr>
            </table>
            <![endif]-->
                </td>
            </tr>
        </tbody>
    </table></td>
                                </tr>
                                <tr>
                                    <td valign="top" id="templateFooter"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowBlock" style="min-width:100%;">
        <tbody class="mcnFollowBlockOuter">
            <tr>
                <td align="center" valign="top" style="padding:9px" class="mcnFollowBlockInner">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentContainer" style="min-width:100%;">
        <tbody><tr>
            <td align="center" style="padding-left:9px;padding-right:9px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnFollowContent">
                    <tbody><tr>
                        <td align="center" valign="top" style="padding-top:9px; padding-right:9px; padding-left:9px;">
                            <table align="center" border="0" cellpadding="0" cellspacing="0">
                                <tbody><tr>
                                    <td align="center" valign="top">
                                        <!--[if mso]>
                                        <table align="center" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                        <![endif]-->
                                        
                                            <!--[if mso]>
                                            <td align="center" valign="top">
                                            <![endif]-->
                                            
                                            
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">
                                                    <tbody><tr>
                                                        <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                <tbody><tr>
                                                                    <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                            <tbody><tr>
                                                                                
                                                                                    <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                        <a href="http://www.facebook.com" target="_blank"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-48.png" alt="Facebook" style="display:block;" height="24" width="24" class=""></a>
                                                                                    </td>
                                                                                
                                                                                
                                                                            </tr>
                                                                        </tbody></table>
                                                                    </td>
                                                                </tr>
                                                            </tbody></table>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            
                                            <!--[if mso]>
                                            </td>
                                            <![endif]-->
                                        
                                            <!--[if mso]>
                                            <td align="center" valign="top">
                                            <![endif]-->
                                            
                                            
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">
                                                    <tbody><tr>
                                                        <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                <tbody><tr>
                                                                    <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                            <tbody><tr>
                                                                                
                                                                                    <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                        <a href="http://instagram.com" target="_blank"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-instagram-48.png" alt="Instagram" style="display:block;" height="24" width="24" class=""></a>
                                                                                    </td>
                                                                                
                                                                                
                                                                            </tr>
                                                                        </tbody></table>
                                                                    </td>
                                                                </tr>
                                                            </tbody></table>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            
                                            <!--[if mso]>
                                            </td>
                                            <![endif]-->
                                        
                                            <!--[if mso]>
                                            <td align="center" valign="top">
                                            <![endif]-->
                                            
                                            
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">
                                                    <tbody><tr>
                                                        <td valign="top" style="padding-right:0; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                                <tbody><tr>
                                                                    <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                            <tbody><tr>
                                                                                
                                                                                    <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                        <a href="http://symfonia.io" target="_blank"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-link-48.png" alt="Website" style="display:block;" height="24" width="24" class=""></a>
                                                                                    </td>
                                                                                
                                                                                
                                                                            </tr>
                                                                        </tbody></table>
                                                                    </td>
                                                                </tr>
                                                            </tbody></table>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                            
                                            <!--[if mso]>
                                            </td>
                                            <![endif]-->
                                        
                                        <!--[if mso]>
                                        </tr>
                                        </table>
                                        <![endif]-->
                                    </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                </tbody></table>
            </td>
        </tr>
    </tbody></table>
    
                </td>
            </tr>
        </tbody>
    </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
        <tbody class="mcnDividerBlockOuter">
            <tr>
                <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 10px 18px 25px;">
                    <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-top: 2px solid #EEEEEE;">
                        <tbody><tr>
                            <td>
                                <span></span>
                            </td>
                        </tr>
                    </tbody></table>
    <!--            
                    <td class="mcnDividerBlockInner" style="padding: 18px;">
                    <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
    -->
                </td>
            </tr>
        </tbody>
    </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
        <tbody class="mcnTextBlockOuter">
            <tr>
                <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                    <!--[if mso]>
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
            <tr>
            <![endif]-->
              
            <!--[if mso]>
            <td valign="top" width="600" style="width:600px;">
            <![endif]-->
                    <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                        <tbody><tr>
                            
                            <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                            
                                <em>Copyright © 2021 Symfonia., Todos los derechos reservados.</em><br>
    www.symfonia.io<br>
    <br>
    <strong>Nuestro correo de contacto es:</strong><br>
    soporte@symfonia.io<br>
    <br>
    ¿Quieres cambiar como recibes estos correos?<br>
    Puedes&nbsp;<a href="*|UPDATE_PROFILE|*">actualizar tus preferencias</a>&nbsp;o <a href="*|UNSUB|*">darte de baja de estos corre</a>
                            </td>
                        </tr>
                    </tbody></table>
            <!--[if mso]>
            </td>
            <![endif]-->
                    
            <!--[if mso]>
            </tr>
            </table>
            <![endif]-->
                </td>
            </tr>
        </tbody>
    </table></td>
                                </tr>
                            </table>
                            <!--[if (gte mso 9)|(IE)]>
                            </td>
                            </tr>
                            </table>
                            <![endif]-->
                            <!-- // END TEMPLATE -->
                        </td>
                    </tr>
                </table>
            </center>
        </body>
    </html>
    `
  }
}
