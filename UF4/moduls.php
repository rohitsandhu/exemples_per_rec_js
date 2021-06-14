<?php
$car=$_REQUEST['codi'];
if ($car==1)
{
	/*DAW*/
  $moduls=array('Sistemes Informàtics','Bases de Dades','Programació',
					'Llenguatges de Marques','Entorns de Desenvolupament',
					'Desenvolupament Web Entorn Client','Desenvolupament Web Entorn Servidor',
					'Desplegament Aplicacions Web','Disseny Interfícies Web',
					'Formació i Orientació Laboral','Empresa i Iniciativa Emprenedora',
					'Projecte de Desenvolupament Aplicacions Web','Formació en Centres de Treball');
}
if ($car==2)
{
	/*DAM*/
  $moduls=array('Sistemes Informàtics','Bases de Dades','Programació','Llenguatges de Marques',
		'Entorns de Desenvolupament','Accés a Dades','Desenvolupament Interfícies',
		'Programació Multimèdia i Dispositius Mòbils','Programació de Serveis i Processos',
		'Sistemes de Gestió Empresarial','Formació i Orientació Laboral','Empresa i Iniciativa Emprenedora',
		'Projecte de Desenvolupament Aplicacions Multiplataforma','Formació en Centres de Treball');
									
}
if ($car==3)
{
/*ASIX*/
  $moduls=array('Implantació de Sistemes Operatius"','Gestió de Bases de Dades','Programació Bàsica',
		'Llenguatges de Marques','Fonaments de Maquinari','Administració de Sistemes Operatius',
		'Planificació i Administració de Xarxes','Serveis de Xarxa i Internet','Implantació Aplicacions Web',
		'Administració de Sistemes Gestors de Bases de Dades','Seguretat i Alta Disponibilitat',
		'Formació i Orientació Laboral','Empresa i Iniciativa Emprenedora',
		'Projecte de Administració de Sistemes Informàtics en Xarxa','Formació en Centres de Treball');
				
}


$xml="<?xml version=\"1.0\"?>\n";
$xml.="<moduls>\n";
for($f=0;$f<count($moduls);$f++)
{
  $xml.="<modul>".$moduls[$f]."</modul>\n";
}
$xml.="</moduls>\n";
header('Content-Type: text/xml');
echo $xml;
?>
